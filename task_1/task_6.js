/**<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Напиши скрипт, который бы при потере фокуса на инпуте, проверял
 его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 */
const inputEl = document.querySelector("#validation-input");

let lengthEl = inputEl.dataset.length;
inputEl.addEventListener("focus", () => {
  inputEl.classList.add("focused");
});
inputEl.addEventListener("blur", () => {
  let value = inputEl.value;
  if (value.length === Number(lengthEl)) {
    inputEl.classList.remove("focused");
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  if (value.length !== Number(lengthEl)) {
    inputEl.classList.remove("focused");
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
  if (value.length === 0) {
    inputEl.classList.remove("focused");
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
});
