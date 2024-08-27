"use client";

import React, { useState } from "react";
import { getAdvice } from "../lib/actions";

export function Advice() {
  const [advice, setAdvice] = useState<{ id: number; advice: string } | null>(
    null
  );

  const fetchAdvice = async () => {
    const result = await getAdvice();
    setAdvice(result.slip);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customDark">
      {advice && (
        <div className="relative flex flex-col items-center text-lightCyan bg-customGray p-8 w-1/4 text-center gap-4">
          <p className="text-neonGreen">Advice # {advice.id}</p>
          <p>{advice.advice}</p>
          <img src="/pattern-divider-desktop.svg" alt="" />
        </div>
      )}

      <button
        onClick={fetchAdvice}
        className="bg-neonGreen p-4 rounded-full m-4"
      >
        {" "}
        <img src="/icon-dice.svg" className="text-black " alt=" dice icon" />
      </button>
    </div>
  );
}
