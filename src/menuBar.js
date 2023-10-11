function menuBar() {
  //   const menuBar = document.createElement("div");
  //   const menuLinks = document.createElement("ul");

  //   menuLinks.innerHTML = `<h1>Ola Mundo!</h1>`;

  //   menuBar.appendChild(menuLinks);

  return `
    <div class="menu-bar">
        <h1 >Foody</h1>
        <ul class='menu-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div>
            <span>Cart-icon</span>
            <button type="button">Sign Up</button>
        </div>
    </div>
  `;
}

export default menuBar;
