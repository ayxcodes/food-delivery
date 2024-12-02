let cartDishes = [];
let cartPrice = [];

function renderMain() {
    let allDishes = document.getElementById('main-dishes');
    allDishes.innerHTML = ``;

    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].kategorie === 'Burger') {
            for (let j = 0; j < dishes[i].menu.length; j++) {
                let burger = dishes[i].menu[j];
                allDishes.innerHTML += getMainDishesTemplate(burger);
            }
        }
    }
}

function renderSide() {
    let allDishes = document.getElementById('side-dishes');
    allDishes.innerHTML = ``;

    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].kategorie === 'Beilagen') {
            for (let j = 0; j < dishes[i].menu.length; j++) {
                let sides = dishes[i].menu[j];
                allDishes.innerHTML += getSideDishesTemplate(sides);
            }
        }
    }
}

function renderDrinks() {
    let allDrinks = document.getElementById('all-drinks');
    allDrinks.innerHTML = ``;

    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].kategorie === 'Getränke') {
            for (let j = 0; j < dishes[i].menu.length; j++) {
                let drinks = dishes[i].menu[j];
                allDrinks.innerHTML += getDrinksTemplate(drinks);
            }
        }
    }
}


function addToBasket(i) {
    let basket = document.getElementById('basket');
    basket.innerHTML = ``;

    basket.innerHTML += getBasketTemplate(i);
}


function addMeal() {}

function subtractMeal() {}

function deleteFromBasket() {}