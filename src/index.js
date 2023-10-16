import bigCard from "./bigCard";
import smallCard from "./smallCard";
import menuBar from "./menuBar";
import "./styles.css";

const content = document.getElementById("content");
function component() {
  const element = document.createElement("div");

  const cardContainer = document.createElement("div");
  cardContainer.classList = "card-container";

  element.innerHTML = menuBar();
  element.innerHTML += bigCard();

  cardContainer.innerHTML += smallCard(
    "img",
    "Tomato Salad",
    "Fresh and healthy",
    8.99
  );
  cardContainer.innerHTML += smallCard(
    "img",
    "French Fries",
    "Salty and Tasty",
    5.99
  );
  cardContainer.innerHTML += smallCard(
    "img",
    "Prime Hot Chicken Burger",
    "Crispy and Spicey",
    13.99
  );
  cardContainer.innerHTML += smallCard(
    "img",
    "Potato with chicken",
    "Big, delicious and",
    50.0
  );

  element.appendChild(cardContainer);

  return element;
}

content.appendChild(component());
