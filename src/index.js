import "./style.css";
import { loadMenu } from "./menu";
import { loadHome } from "./home";
import { loadContact } from "./contact";

function navbar() {
  const body = document.querySelector("body");
  const navbar = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const a = document.createElement("a");
  const a2 = document.createElement("a");
  const a3 = document.createElement("a");

  navbar.classList.add("navbar");

  a.textContent = "Home";
  a2.textContent = "Menu";
  a3.textContent = "Contact";

  a.href = "#";
  a2.href = "#";
  a3.href = "#";

  body.insertBefore(navbar, body.children[0]);
  navbar.appendChild(ul);
  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(li3);
  li.appendChild(a);
  li2.appendChild(a2);
  li3.appendChild(a3);

  a.addEventListener("click", () => {
    pageLoad(loadHome);
  });
  a2.addEventListener("click", () => {
    pageLoad(loadMenu);
  });
  a3.addEventListener("click", () => {
    pageLoad(loadContact);
  });
}

function pageLoad(item) {
  content.innerHTML = "";
  item();
}

navbar();
loadHome();
loadContact();
