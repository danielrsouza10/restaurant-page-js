function menuBar() {
  return `
    <div class="menu-bar">
        <h1 >Foody</h1>
        <ul class='menu-links'>
            <li><a href="#" id="home">Home</a></li>
            <li><a href="#" id="menu">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="menu-bar__buttons">
          <a hred="#"><span class="material-symbols-outlined">
          shopping_cart
          </span></a>
          <button type="button">Sign Up</button>
        </div>
    </div>
  `;
}

export default menuBar;
