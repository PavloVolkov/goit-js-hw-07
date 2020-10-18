/*
        <button type="button" data-action="decrement">-1</button>
        <span id="value">0</span>
        <button type="button" data-action="increment">+1</button>
*/
const buttonsEl = document.querySelectorAll("#counter button");
const btnSpanEl = document.querySelector("#value");
let counterValue = 0;
const incButton = buttonsEl[1];
const decButton = buttonsEl[0];

function increment() {
  counterValue += 1;
  btnSpanEl.textContent = counterValue;
  return counterValue;
}
function decrement() {
  counterValue -= 1;
  btnSpanEl.textContent = counterValue;
  return counterValue;
}

incButton.addEventListener("click", increment);
decButton.addEventListener("click", decrement);

// console.log(decButton.dataset.action);
// buttonsEl.forEach((el) => el.classList.add("btn"));
// const buttonDecEl = buttonsEl[0].dataset.action;
// console.log(buttonDecEl);
// const buttonIncEl = buttonsEl[1].dataset.action;
// console.log(buttonIncEl);
// console.log(buttonsEl[0].textContent);
