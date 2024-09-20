"use client";

import React, { useState, useEffect } from "react";
import { getAdvice } from "../lib/actions";

export function Advice() {
  const [advice, setAdvice] = useState<{ id: number; advice: string } | null>(
    null
  );

  const fetchAdvice = async () => {
    const result = await getAdvice();
    setAdvice(result.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customDark">
      {advice && (
        <div className="relative flex flex-col items-center text-lightCyan bg-customGray p-8 pb-14 md:m-0 m-4 w-2/3 md:w-1/4 text-center gap-4 rounded-2xl">
          <p className="text-neonGreen">Advice # {advice.id}</p>
          <p>{advice.advice}</p>
          <img src="/pattern-divider-desktop.svg" alt="" />
          <button
            onClick={fetchAdvice}
            className="absolute bottom-[0px] bg-neonGreen p-4 rounded-full transform translate-y-1/2"
          >
            <img src="/icon-dice.svg" className="text-black" alt="dice icon" />
          </button>
        </div>
      )}
    </div>
  );
}
