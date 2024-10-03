function showProduct(name, description, price, image) {
    document.getElementById('product-container').innerHTML += `
      <div class="product-container">
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="price">${price}</div>
      </div>
    `;
  }
  