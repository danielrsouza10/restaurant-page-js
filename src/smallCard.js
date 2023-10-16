function smallCard(img, title, description, price) {
  return `
        <div class="small-card">
            <a href="#">
                <img src="${img}" alt="${img}">
                <span class="small-card__title">${title}</span>
                <p>${description}</p>
                <span>${"$ " + price}</span>
            </a>
        </div>
    `;
}

export default smallCard;
