"use strict";

const adviceIdEl = document.querySelector(".advice-id");
const adviceTextEl = document.querySelector(".advice-text");
const btn = document.querySelector("button");

const getAdvice = async function () {
  try {
    const adviceObj = await fetch("https://api.adviceslip.com/advice");
    console.log(adviceObj);

    if (!adviceObj.ok)
      throw new Error(
        "Something went wrong but don't worry, everybody has difficulties"
      );

    const adviceText = await adviceObj.json();
    adviceIdEl.innerText = "#" + adviceText.slip.id;
    adviceTextEl.innerText = "“" + adviceText.slip.advice + "”";
  } catch (err) {
    adviceIdEl.innerText = "error";
    adviceTextEl.innerText = err;
  }
};

getAdvice();
btn.addEventListener("click", getAdvice);
