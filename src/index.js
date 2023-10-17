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
  cardContainer.innerHTML = smallCard(
    "../assets/images/food01.jpeg",
    "Tomato Salad",
    "Fresh and healthy",
    8.99
  );
  cardContainer.innerHTML += smallCard(
    "../assets/images/food01.jpeg",
    "French Fries",
    "Salty and Tasty",
    5.99
  );
  cardContainer.innerHTML += smallCard(
    "../assets/images/food01.jpeg",
    "Prime Chicken",
    "Crispy and Spicey",
    13.99
  );
  cardContainer.innerHTML += smallCard(
    "../assets/images/food01.jpeg",
    "Potato chicken",
    "Big, delicious and",
    50.0
  );

  element.innerHTML = menuBar();
  element.innerHTML += bigCard("../assets/images/food01.jpeg");

  element.appendChild(cardContainer);

  return element;
}

content.appendChild(component());

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  content.innerHTML = "";
  element.innerHTML = menuBar();
  element.appendChild(cardContainer);
  content.appendChild(element);
});

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  content.innerHTML = "";
  element.innerHTML = menuBar();
  content.appendChild(element);
  // content.appendChild(component());
});
