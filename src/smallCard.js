function smallCard(img, title, description, price) {
  return `
        <div class="small-card">
            <a href="#">
                <img src="${img}" alt="${img}" class="small-card__image">
                <div class="small-card__description">
                    <span class="small-card__title">${title}</span>
                    <p>${description}</p>
                    <span>${"$ " + price}</span>
                </div>
            </a>
        </div>
    `;
}

export default smallCard;
