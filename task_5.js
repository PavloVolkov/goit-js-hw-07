/**<input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
// console.log(inputEl.value);
// console.log(outputEl.textContent);

inputEl.addEventListener("input", () => {
  if (inputEl.value !== "") {
    outputEl.textContent = inputEl.value;
  } else {
    outputEl.textContent = "незнакомец";
  }
});
