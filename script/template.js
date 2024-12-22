function getMainDishesTemplate(burger, i, j) {
    return `
    <div class="dish">
        <h3>${burger.name}</h3>
        <p>${burger.discription}</p><br>
        <button onclick="addToBasket(${i}, ${j})" class="add-btn">+</button>
        <span class="price">${burger.price.toFixed(2)}€</span>
    </div>
    `;
}

function getSideDishesTemplate(sides, i, j) {
    return `
    <div class="dish">
        <h3>${sides.name}</h3>
        <p>${sides.discription}</p><br>
        <button onclick="addToBasket(${i}, ${j})" class="add-btn">+</button>
        <span class="price">${sides.price.toFixed(2)}€</span>
    </div>
    `;
}

function getDrinksTemplate(drinks, i, j) {
    return `
    <div class="dish">
        <h3>${drinks.name}</h3>
        <p>${drinks.discription}</p><br>
        <button onclick="addToBasket(${i}, ${j})" class="add-btn">+</button>
        <span class="price">${drinks.price.toFixed(2)}€</span>
    </div>
    `;
}

function getBasketTemplate(i) {
    let item = dishesInBasket[i];
    return `
    <div class="basket">
        <div class="basket-meal-wrapper">
            <h4>${item.name}</h4> <!-- Zugriff auf den Namen des Artikels im Warenkorb -->
            <div class="basket-meals">
                <div class="amount-wrapper">
                  <button onclick="subtractMeal(${i})" id="subtract-meal" class="basket-button">-</button>
                  <p>${item.amount}x</p> <!-- Zeige die Menge des Artikels -->
                  <button onclick="addMeal(${i})" id="add-meal" class="basket-button">+</button>
                </div>
                <p class="price">${item.total.toFixed(2)}€</p> <!-- Zeige den Gesamtpreis des Artikels -->
                <button onclick="deleteFromBasket(${i})" id="delete-meal" class="basket-button">x</button>
            </div>
        </div>
    </div>
    `;
}