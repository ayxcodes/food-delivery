let dishesInBasket = [];
let itemCounter = [];
let itemSubtotal = [];
let itemsInBasket = [];
let minimumOrderValue = 20;
let basketSubTotal;
let basketTotal = 0;


function render() {
    renderMain();
    renderSide();
    renderDrinks();
    renderBasket()
}

function renderMain() {
    let allDishes = document.getElementById('main-dishes');
    allDishes.innerHTML = ``;

    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].kategorie === 'Burger') {
            for (let j = 0; j < dishes[i].menu.length; j++) {
                let burger = dishes[i].menu[j];
                allDishes.innerHTML += getMainDishesTemplate(burger, i, j);
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
                allDishes.innerHTML += getSideDishesTemplate(sides, i, j);
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
                allDrinks.innerHTML += getDrinksTemplate(drinks, i, j);
            }
        }
    }
}


function renderBasket() {
    let total = dishesInBasket.reduce((sum, item) => sum + item.total, 0);
    let basket = document.getElementById('basket');
    basket.innerHTML = ``;
    
    if (dishesInBasket.length === 0) {
        basket.innerHTML = '<p class="basket-disclaimer">Dein Warenkorb ist momentan leer.</p>';
        return;

    } else {
        
        for (let i = 0; i < dishesInBasket.length; i++) {
        basket.innerHTML += getBasketTemplate(i);
    }};
}


function addToBasket(i, j) {
    let item = dishes[i].menu[j];
    let itemName = item.name;
    let itemPrice = item.price;
    let itemAmount = 1;
    let itemTotal = itemPrice * itemAmount;

    let itemAlreadyExistsInBasket = false;
    let indexOfExistingItemInBasket = -1;

    for (let j = 0; j < dishesInBasket.length; j++) {
        if (dishesInBasket[j].name === itemName) {
            itemAlreadyExistsInBasket = true;
            indexOfExistingItemInBasket = j;
            break;
        }
    }

    if (itemAlreadyExistsInBasket) {
        dishesInBasket[indexOfExistingItemInBasket].amount += itemAmount;
        dishesInBasket[indexOfExistingItemInBasket].total += itemTotal;

    } else {

        dishesInBasket.push({
            name: itemName,
            price: itemPrice,
            amount: itemAmount,
            total: itemTotal,
        });
    }

    renderBasket();
}

function subtractMeal(index) {
    let item = dishesInBasket[index];
    if (item.amount > 1) {
        item.amount--;
        item.total = item.amount * item.price;
    } else {
        deleteFromBasket(index);
    }
    renderBasket();
}

function addMeal(index) {
    let item = dishesInBasket[index];
    item.amount++;
    item.total = item.amount * item.price;
    renderBasket();
}

function deleteFromBasket(index) {
    dishesInBasket.splice(index, 1);
    renderBasket();
}