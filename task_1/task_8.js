function createBoxes(amount) {
  if (amount === 0) {
    destroyBoxes();
  }
  if (amount > 0) {
    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    const boxes = document.querySelector("#boxes");
    boxes.classList.add("newDiv_wrapper");
    boxes.style.display = "flex";
    boxes.style.flexDirection = "column";
    boxes.style.alignItems = "center";
    let newDivHeight = 30;
    let newDivWidth = 30;

    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement("div");

      newDiv.classList.add(`newDiv${i}`);

      document.querySelector(`newDiv${i}`);

      newDiv.style.width = `${newDivWidth}px`;
      newDiv.style.height = `${newDivHeight}px`;
      newDiv.style.backgroundColor = `rgb(
        ${randomInteger(1, 255)},
        ${randomInteger(1, 255)},
        ${randomInteger(1, 255)})`;
      newDiv.style.marginTop = "5px";

      boxes.append(newDiv);

      newDivWidth += 10;
      newDivHeight += 10;
    }
  }
}

const buttonsEl = document.querySelectorAll("#controls button");
const inputEl = document.querySelector("#controls input");

const renderBtnEl = buttonsEl[0];
const destroyBtnEl = buttonsEl[1];

destroyBtnEl.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  const boxeRemoveEl = boxes.querySelectorAll("div");
  boxeRemoveEl.forEach((el) => el.remove());
}

inputEl.addEventListener("blur", function onInputChange(event) {
  let z = Number(event.currentTarget.value);

  renderBtnEl.addEventListener("click", function handleRenderBtnClick() {
    destroyBoxes();
    createBoxes(z);
  });
});
