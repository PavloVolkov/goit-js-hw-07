const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsListEl = document.querySelector("#ingredients");
const listbuilder = (arr) => {
  return arr.map((el) => {
    const a = document.createElement("li");
    a.textContent = el;
    return a;
  });
};
let x = listbuilder(ingredients);
ingredientsListEl.append(...x);
// const newIngredientsListEl = ingredients.map((el) => {
//   const a = document.createElement("li");
//   a.textContent = el;
//   return a;
// });

// ingredientsListEl.append(...newIngredientsListEl);

// const ingredientsListEl = document.querySelector("#ingredients");
// console.log(ingredientsListEl);
// const listItems = ingredients.forEach((el) => document.createElement("li"));
// listItem.textContent = "1";
// ingredientsListEl.append(listItem);
// console.log(ingredientsListEl);
// const btn = document.createElement("button");
// btn.type = "button";
// btn.style.backgroundColor = "red";
// console.log(btn);
