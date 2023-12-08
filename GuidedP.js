//Guided Practice
const dinner = {
  cheeseburger: 12,
  steak: 20,
  soup: 8,
  macAndcheese: 14,
  soupAndsalad: 16,
};

//Prices of the meals eaten
console.log(Object.keys(dinner));

const total = object.value(dinner);

console.log(Object.values(dinner));

//add the values of the dinner object to cal the total cost of meal
const prices = Object.values(dinner);
let totalCost = 0;

for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}

console.log(totalCost);
