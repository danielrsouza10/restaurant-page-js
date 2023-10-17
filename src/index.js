import bigCard from "./bigCard";
import smallCard from "./smallCard";
import menuBar from "./menuBar";
import "./styles.css";

const content = document.getElementById("content");

const cardContainer = document.createElement("div");
cardContainer.classList = "card-container";

const element = document.createElement("div");
element.className = "element";

function component() {
  element.innerHTML = menuBar();
  element.innerHTML += bigCard();
  element.innerHTML += smallCard();

  return element;
}

function home() {
  element.innerHTML = "";
  element.innerHTML = menuBar();
  element.innerHTML += bigCard();
  element.innerHTML += smallCard();
}

function menu() {
  element.innerHTML = "";
  element.innerHTML = menuBar();
  element.innerHTML += smallCard();
}

content.appendChild(component());

const menu = document.querySelector("#menu");
menu.addEventListener("click", (e) => {
  const target = e.target.innerText;
  target.innerText;
  if (target === "Home") {
    home();
  } else if (target === "Menu") {
    menu();
  }
  // element.innerHTML = "";
  // element.innerHTML = menuBar();
  // element.innerHTML += smallCard();
  // element.appendChild(cardContainer);
  // content.appendChild(element);
});
