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

function makeRandomPizza(){
    var rndmPizza = {};
    rndmPizza.crustType = randomPick(crustType);
    rndmPizza.sauceType = randomPick(sauceType);
    rndmPizza.cheeseType = randomPick(cheeseType);
    rndmPizza.toppings = randomPick(toppings);
    return rndmPizza;
}

var rndmOrder1 = makeRandomPizza();

console.log(rndmOrder1);