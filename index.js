// Prompt the user for a list of Falvors.
const flavorPrompt = prompt(
  "Welcome to Froyo! Please enter your flaver.",
  "vanilla, vanilla, vanilla,strawberry,coffee,coffee "
);

// This is your Array (i):
//vanilla, vanilla, vanilla,strawberry,coffee,coffee

// The user's input string is split into an array of strings.
const stringArray = flavorPrompt.split(",");

//Below is the split:
const flavors = stringArray;

//An object is used to keep count of how many orders there are of each flavor. Create an order of the user. Use Object:

const order = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
};

//A loop is used to iterate through the array of flavors. Creat a loop:

for (let i = 0; i < flavors.length; i++) {
  if (flavors[i] === "vanilla") {
    order.vanilla++;
  }

  if (flavors[i] === "coffee") {
    order.coffee++;
  }

  if (flavors[i] === "strawberry") {
    order.strawberry++;
  }
}

//Result:
console.log(order);
