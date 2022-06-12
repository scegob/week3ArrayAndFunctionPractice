// Array Method practice

/* map method 
Returns a new array containing the results of invoking
a function on every element in the calling array. */
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);
// I still need to read more into this method


/* reduce method
Executes a user-supplied "reducer" callback function on
each element of the array (from left to right), to reduce
it to a single value.*/
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);
console.log(sum);
 
/* forEach method
Calls a function for each element in the calling array. 
so this example will call each even array*/
names.forEach(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);

/* filter method
Returns a new array containing all elements
 of the calling array for which the provided filtering
 function returns true. */
let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});

/* splice method 
Adds and/or removes elements from an array. 
this example it will start at the second array
take away the next 3 arrays from the list*/
let removedElement = names.splice(2, 3);
console.log(removedElement);
