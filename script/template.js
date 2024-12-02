function getMainDishesTemplate(burger) {
    return `
    <div class="dish">
        <h3>${burger.name}</h3>
        <p>${burger.discription}</p><br>
        <button onclick="addToBasket()" class="add-btn">+</button>
        <span class="price">${burger.price.toFixed(2)}€</span>
    </div>
    `;
}

function getSideDishesTemplate(sides) {
    return `
    <div class="dish">
        <h3>${sides.name}</h3>
        <p>${sides.discription}</p><br>
        <button onclick="addToBasket()" class="add-btn">+</button>
        <span class="price">${sides.price.toFixed(2)}€</span>
    </div>
    `;
}

function getDrinksTemplate(drinks) {
    return `
    <div class="dish">
        <h3>${drinks.name}</h3>
        <p>${drinks.discription}</p><br>
        <button onclick="addToBasket()" class="add-btn">+</button>
        <span class="price">${drinks.price.toFixed(2)}€</span>
    </div>
    `;
}

function getBasketTemplate(i) {
    return `
    <div class="basket">
        <div class="basket-meal-wrapper">
            <h4>${i.name}</h4>
            <div class="basket-meals">
                <div class="amount-wrapper">
                  <button onclick="subtractMeal()" id="subtract-meal" class="basket-button">-</button>
                  <p>1x</p>
                  <button onclick="addMeal()" id="add-meal" class="basket-button">+</button>
                </div>
                <p class="price">${i.price}</p>
                <button onclick="deleteFromBasket()" id="delete-meal" class="basket-button">x</button>
            </div>
        </div>
        <div id="basket-total">
            <h4>Gesamt</h4>
            <p></p>
        </div>
    </div>
    `;
}