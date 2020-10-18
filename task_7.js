/**Напиши скрипт, который реагирует на изменение значения
 * input#font-size-control (событие input) и изменяет инлайн-стиль
 *  span#text обновляя свойство font-size. В результате при
 * перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */
const inputRangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", onInputChange);
function onInputChange(event) {
  let rangeVal = event.currentTarget.value;
  spanEl.style.fontSize = `${rangeVal}px`;
}
