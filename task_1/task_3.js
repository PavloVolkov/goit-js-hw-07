const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = (arr, selector) => {
  const listEl = document.querySelector(`${selector}`);
  listEl.classList.add("main_list");
  arr.map(({ url, alt }) => {
    listEl.insertAdjacentHTML(
      "beforeend",
      ` <li><img class="box" src="${url}" alt="${alt}"></li>`
    );
  });
};

list(images, "#gallery");

// const list = (arr, selector) => {
//   const listEl = document.querySelector(`${selector}`);
//   const listItems = (arr) => {
//     return arr.map(({ url, alt }) => {
//       listEl.insertAdjacentHTML(
//         "beforeend",
//         ` <li><img class="box" src="${url}" alt="${alt}"></li>`
//       );
//     });
//   };
//   listEl.append(...listItems(images));
// };

// const list = (arr, selector) => {
//   const listItems = (arr) => {
//     return arr.map(({ url, alt }) => {
//       const listItem = document.createElement("li");
//       const itemImage = document.createElement("img");

//       itemImage.src = url;
//       itemImage.alt = alt;
//       itemImage.classList.add("box");
//       return listItem.appendChild(itemImage);
//     });
//   };
//   const listEl = document.querySelector(`${selector}`);
//   listEl.append(...listItems(images));
// };
