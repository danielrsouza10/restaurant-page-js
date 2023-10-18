import bigCard from "./bigCard";
import smallCard from "./smallCard";
import menuBar from "./menuBar";
import contact, { contactPage } from "./contact";
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

function renderHome() {
  element.innerHTML = "";
  element.innerHTML = menuBar();
  element.innerHTML += bigCard();
  element.innerHTML += smallCard();
}

function renderMenu() {
  element.innerHTML = "";
  element.innerHTML = menuBar();
  element.innerHTML += smallCard();
}

function renderContact() {
  element.innerHTML = "";
  element.innerHTML = menuBar();
  element.innerHTML += contactPage();
}

content.appendChild(component());

document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  target.innerText;
  if (target === "Home") {
    renderHome();
  } else if (target === "Menu") {
    renderMenu();
  } else if (target === "Contact") {
    renderContact();
  }
});
