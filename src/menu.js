import img1 from "./img/Asset 2.png";
import img2 from "./img/Asset 3.png";

function menu() {
  const menuPage = document.createElement("div");
  const title = document.createElement("p");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");
  const myImg = new Image();
  const myImg2 = new Image();
  const cardText = document.createElement("p");
  const cardText2 = document.createElement("p");

  title.textContent = "the-menu";
  cardText.textContent = "coffee-latte";
  cardText2.textContent = "espresso";

  title.classList.add("title-menu");
  card1.classList.add("card");
  card2.classList.add("card");
  cardText.classList.add("title-card");
  cardText2.classList.add("title-card");

  myImg.src = img1;
  myImg2.src = img2;

  menuPage.appendChild(title);
  menuPage.appendChild(card1);
  menuPage.appendChild(card2);
  card1.appendChild(myImg);
  card1.appendChild(cardText);
  card2.appendChild(myImg2);
  card2.appendChild(cardText2);

  menuPage.setAttribute("id", "menu");

  return menuPage;
}

function loadMenu() {
  const content = document.querySelector("#content");
  content.appendChild(menu());
}

export { loadMenu };
