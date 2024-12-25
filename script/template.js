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
            <h4>${item.name}</h4>
            <div class="basket-meals">
                <div class="amount-wrapper">
                  <button onclick="subtractMeal(${i})" id="subtract-meal" class="basket-btn">-</button>
                  <p>${item.amount}x</p>
                  <button onclick="addMeal(${i})" id="add-meal" class="basket-btn">+</button>
                </div>
                <p class="price">${item.total.toFixed(2)}€</p>
                <button onclick="deleteFromBasket(${i})" id="delete-meal" class="basket-btn">x</button>
            </div>
        </div>
        <div id="basket"></div>
    </div>
    `;
}

function getBasketTotalTemplate() {
    return `
    <div id="basket-total">
        <h4>Gesamt</h4>
        <p id="total">${basketTotal}€</p>
    </div>
    <div class="order">
        <button onclick="orderSent()" class="order-btn">Bestellen</button>
    </div>
    `;
}

function getOverlayTemplate() {
    return `
    <div onclick="closeOverlay()" class="overlay-container">
        <div class="order-confirm">
            <h1>Bestellung eingegangen!</h1>
            <p>Wir haben Ihre Bestellung erhalten und werden sie schnellstmöglich zubereiten.</p>
        </div>
    </div>
    `;
}