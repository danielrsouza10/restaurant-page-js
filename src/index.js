import bigCard from "./bigCard";
import menuBar from "./menuBar";
import "./styles.css";

const content = document.getElementById("content");
function component() {
  const element = document.createElement("div");
  element.innerHTML = menuBar();
  element.innerHTML += bigCard();

  return element;
}

content.appendChild(component());
