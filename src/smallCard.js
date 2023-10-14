function smallCard(img, title, description, price) {
  return `
        <div class="small-card">
            <a href="#">
                <img src="${img}" alt="${img}">
                <h1>${title}</h1>
                <p>${description}</p>
                <span>${"$ " + price}</span>
            </a>
        </div>
    `;
}

export default smallCard;
