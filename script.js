"use strict";

const adviceIdEl = document.querySelector(".advice-id");
const adviceTextEl = document.querySelector(".advice-text");
const btn = document.querySelector("button");

const getAdvice = async function () {
  const adviceObj = await fetch("https://api.adviceslip.com/advice");

  const adviceText = await adviceObj.json();

  return adviceText;
};

function renderAdvice() {
  getAdvice().then((res) => {
    adviceIdEl.innerText = "#" + res.slip.id;
    adviceTextEl.innerText = "“" + res.slip.advice + "”";
  });
}
renderAdvice();
btn.addEventListener("click", renderAdvice);
