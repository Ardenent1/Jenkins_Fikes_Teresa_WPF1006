/*
Teresa Jenkins Fikes
WPF 1408 Section 01
Go To training Week 2
 */

//alert("Testing 1.2. 3");

//Create a js File that will tell us how old we are

//Ask the user their name
var name = prompt("Please type in your name");

//Say hello to the user and let them know what we are doing
//Alert the user

alert("Welcome "+name+"!  Let's go ahead and figure out how old you are." );

//Ask the user what year they were born in
//Create a variable to catch their answer

var yearBorn = prompt("What year were you born?");

//Console.log out the response
console.log(yearBorn);


//Current year and subtract the year they were born

//Create a variable for the current year

var currentYear = 2014;

//Calculate the age

var age= currentYear - yearBorn;

//Alert user with their age
alert(name+" you are "+age+" years old.);

//Let's make this more complex
//How old will the user be in the future . . . .

//Ask the user, how many years in the future they would like to know
var yearBorn = prompt("How many years in the future would you like to know?");
console.log(yearsMore);

//Calculate our future age
var futureAge = age + parseInt(yearsMore);
console.log(futureAge);