let dishesInBasket = [];
let itemCounter = [];
let itemSubtotal = [];
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
    let basket = document.getElementById('basket');
    basket.innerHTML = ``;
    
    if (dishesInBasket.length === 0) {
        basket.innerHTML = '<p class="basket-disclaimer">Dein Warenkorb ist momentan leer.</p>';
        return;
    } else {  
        for (let i = 0; i < dishesInBasket.length; i++) {
        basket.innerHTML += getBasketTemplate(i);
    }};
    calcBasketTotal()
}

function addToBasket(i, j) {
    let item = getItemFromMenu(i, j);
    let { itemName, itemPrice, itemAmount, itemTotal } = getItemDetails(item);
    let { itemAlreadyInBasket, indexOfItemInBasket } = checkItemInBasket(itemName);

    if (itemAlreadyInBasket) {
        updateBasketItem(indexOfItemInBasket, itemAmount, itemTotal);
    } else {
        addItemToBasket(itemName, itemPrice, itemAmount, itemTotal);
    }
    renderBasket();
}

function getItemFromMenu(i, j) {
    return dishes[i].menu[j];
}

function getItemDetails(item) {
    let itemName = item.name;
    let itemPrice = item.price;
    let itemAmount = 1;
    let itemTotal = itemPrice * itemAmount;
    return { itemName, itemPrice, itemAmount, itemTotal };
}

function checkItemInBasket(itemName) {
    let itemAlreadyInBasket = false;
    let indexOfItemInBasket = -1;

    for (let j = 0; j < dishesInBasket.length; j++) {
        if (dishesInBasket[j].name === itemName) {
            itemAlreadyInBasket = true;
            indexOfItemInBasket = j;
            break;
        }
    }
    return { itemAlreadyInBasket, indexOfItemInBasket };
}

function updateBasketItem(index, itemAmount, itemTotal) {
    dishesInBasket[index].amount += itemAmount;
    dishesInBasket[index].total += itemTotal;
}

function addItemToBasket(itemName, itemPrice, itemAmount, itemTotal) {
    dishesInBasket.push({
        name: itemName,
        price: itemPrice,
        amount: itemAmount,
        total: itemTotal,
    });
}

function subtractMeal(i) {
    let item = dishesInBasket[i];
    if (item.amount > 1) {
        item.amount--;
        item.total = item.amount * item.price;
    } else {
        deleteFromBasket(i);
    }
    renderBasket();
}

function addMeal(i) {
    let item = dishesInBasket[i];
    item.amount++;
    item.total = item.amount * item.price;
    renderBasket();
}

function deleteFromBasket(i) {
    dishesInBasket.splice(i, 1);
    renderBasket();
}

function calcBasketTotal() {
    basketTotal = dishesInBasket.reduce((sum, item) => sum + item.total, 0).toFixed(2);
    document.getElementById('basket').innerHTML += getBasketTotalTemplate();
}