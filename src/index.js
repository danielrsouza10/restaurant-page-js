import bigCard from "./bigCard";
import smallCard from "./smallCard";
import menuBar from "./menuBar";
import "./styles.css";

const content = document.getElementById("content");
function component() {
  const element = document.createElement("div");
  element.innerHTML = menuBar();
  element.innerHTML += bigCard();

  element.innerHTML += smallCard(
    "img",
    "Tomato Salad",
    "Fresh and healthy",
    8.99
  );
  element.innerHTML += smallCard(
    "img",
    "French Fries",
    "Salty and Tasty",
    5.99
  );
  element.innerHTML += smallCard(
    "img",
    "Prime Hot Chicken Burger",
    "Crispy and Spicey",
    13.99
  );
  element.innerHTML += smallCard(
    "img",
    "Potato with chicken",
    "Big, delicious and",
    50.0
  );

  return element;
}

content.appendChild(component());
