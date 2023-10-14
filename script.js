console.log("Page loaded...");

function makePizza(crust,sauce,cheese,topping){
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.topping = topping;
    return pizza;
}

var order1 = makePizza("thin","marinara","mozzarella",["ground beef","spicy chicken","onions","black olives"]);
console.log(order1);

var crustType = [
    "deep dish",
    "hand tossed",
    "handmade pan",
    "crunchy thin"
]

var sauceType = [
    "robust tomato",
    "marinara",
    "honey BBQ",
    "garlic parmesan"
]

var cheeseType = [
    "mozzarella",
    "Cheddar",
    "provolone",
    "brie"
]

var toppings = [
    "jalapeno peppers",
    "banana peppers",
    "onions",
    "black olives",
    "mushrooms",
    "spinach",
    "diced tomatoes"
]

function randomPick(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function makeRandomPizza1(){
    var rndmPizza = {};
    rndmPizza.crustType = randomPick(crustType);
    rndmPizza.sauceType = randomPick(sauceType);
    rndmPizza.cheeseType = randomPick(cheeseType);
    rndmPizza.toppings = randomPick(toppings);
    return rndmPizza;
}

var rndmOrder1 = makeRandomPizza1();

// console.log(rndmOrder1);

function randomRange(max,min){
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeRandomPizza2(){
    var rndmPizza = {};
    rndmPizza.crustType = randomPick(crustType);
    // for(i = 0; i < randomRange(4,1); i++){
    //     rndmPizza.crustType.push(randomPick(crustType));
    // }

    rndmPizza.sauceType = [];
    for(i = 0; i < randomRange(3,1); i++){
        rndmPizza.sauceType.push(randomPick(sauceType));
    }

    rndmPizza.cheeseType = [];
    for(i = 0; i < randomRange(3,1); i++){
        rndmPizza.cheeseType.push(randomPick(cheeseType));
    }

    rndmPizza.toppings = [];
    for(i = 0; i < randomRange(4,1); i++){
        rndmPizza.toppings.push(randomPick(toppings));
    }

    return rndmPizza;
}

var rndmOrder1 = makeRandomPizza2();

console.log(rndmOrder1);