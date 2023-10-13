console.log("Page loaded...");

function makePizza(crustType,sauceType,cheese,toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var order1 = makePizza("thin","marinara","mozzarella",["ground beef","spicy chicken","onions","black olives"]);
console.log(order1);