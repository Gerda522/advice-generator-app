"use server";

export async function getAdvice() {
  const requestOptions = {
    method: "GET",
  };

  try {
    const response = await fetch(
      "https://api.adviceslip.com/advice",
      requestOptions
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
