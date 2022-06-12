// var todos = ["Laundry", "Dishes", "Taxes]

var racers = ["Natalie"];

// These get pushed to the end of the array
racers.push("Jose")
racers.push("Simone")
racers.push("Anna")
racers.push("Raul")

console.log(racers);

// this is more dynamic than typing each one seperatly
console.log(racers[0] + " won the race")
console.log(racers[racers.length - 1] + " lost the race")

// to remove an array. Will remove the last array
// racers.pop();

// gets the first element in the array
var winner = racers[0];
// gets the last element in the array
var loser = racers[racers.length - 1];

//This alerts out just the winner and the loser
// alert(winner + " won!" + loser + " lost!")

// how to loop over an array

// \n will start a new line useful for alerts and console
var message = "Here are the results: \n\n"

for (let i = 0; i < racers.length; i++) {
    message += racers[i] +" got " + (i + 1) + " place\n"
}

alert(message)

// functions

function sayHello() {
    alert("Hello")
}

sayHello();

// not dynamic
function runRace() {
    var racers = [];

racers.push("Jose")
racers.push("Simone")
racers.push("Anna")
racers.push("Raul")

console.log(racers);

console.log(racers[0] + " won the race")
console.log(racers[racers.length - 1] + " lost the race")

var winner = racers[0];
var loser = racers[racers.length - 1];

var message = "Here are the results: \n\n"

for (let i = 0; i < racers.length; i++) {
    message += racers[i] +" got " + (i + 1) + " place\n"
    }
    alert(message)
}
runRace();

// more dynamic because of the parameter

// normally you would not have functions this big
function runRiggedRace(riggedWinner, riggerLoser) {
    var racers = [riggedWinner];

racers.push("Jose")
racers.push("Simone")
racers.push("Anna")
racers.push("Raul")
// to have the riggedLoser to the end
racers.push(riggerLoser)

console.log(racers);

console.log(racers[0] + " won the race")
console.log(racers[racers.length - 1] + " lost the race")

var winner = racers[0];
var loser = racers[racers.length - 1];

var message = "Here are the results: \n\n"

for (let i = 0; i < racers.length; i++) {
    message += racers[i] +" got " + (i + 1) + " place\n"
    }
    alert(message)
}
// what ever you put in the parameter will win the race
runRiggedRace("Natalie", "Raven");
