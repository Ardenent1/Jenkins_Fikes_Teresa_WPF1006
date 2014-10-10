/*
 Teresa Jenkins Fikes
 WPF 1408 Section 01
 Expressions-Pizzaleftovers
 10-09-2014
 */

alert("At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?");

//Ask the user the number of slices per pizza
//Create a variable to catch their answer

var numberOfSlices = prompt("How many slices does Sparky get to eat?");
console.log(numberOfSlices);

// Ask the user how many pizzas were ordered?
var numberOfPizzas =prompt("Sparky got X slices of pizza?");
console.log(numberOfPizzas);

//Ask the user how many people are at the party?
var numberOfPeople = prompt("How many people are at the party?");
console.log(numberOfPeople);

//Let's find out how many slices for Sparky.
var numberOfSlicesForSparkey;
console.log(numberOfSlicesForSparkey);


var answer = numberOfSlices * numberOfPizzas/numberOfPeople * numberOfSlicesForSparkey;
console.log(answer);


