const categoryEl = document.querySelectorAll("#categories .item");
const eachEl = categoryEl.forEach((el) =>
  console.log(`
    Категория: ${el.querySelector("h2").textContent}
    Количество: ${el.querySelectorAll("li").length}`)
);
const categoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEl.length} категории.`);
