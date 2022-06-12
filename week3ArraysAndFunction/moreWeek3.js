// what ever is after the return will get spit out

// parameters are like bowls that hold ingredients
// after they get used they are washed/cleaned
// they do not get stored for next time
function cookInOven(food, temperature) {
    return food + " cooked at " + temperature
}

// food is now rice, temperature is 300
var cookedRice = cookInOven("rice", 300);
// food is now chicken, temperature is 425
var mainDish = cookInOven("Chicken", 425);

alert("Dinner:\n" + cookedRice + "\n" + mainDish);

// will take an array of ingredients and cook them all
// they will give it out to you
function cookedDinner(ingredients) {
    var cookedFoodArray = [];
    // if we put in cookedFood is will do nothing since it is an empty array
    for(i = 0; i < ingredients.length; i++) {
        ingredients[i]
        var cookedFood = cookInOven(ingredients[i], 400)
        // to put in our array
        cookedFoodArray.push(cookedFood)
    }
    return cookedFoodArray
}

var goodDinner = cookedDinner( ["chicken", "rice", "souffle", "pie"] )
console.log(goodDinner);

var potatoesDinner = cookedDinner( ["potatoes", "potatoes", "potatoes"] )
console.log(potatoesDinner);