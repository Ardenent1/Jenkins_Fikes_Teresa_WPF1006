/*
 Teresa Jenkins Fikes
 WPF 1408 Section 01
 Go To training Week 2
 */
//week 3 GOTOMEETING

var fruitBowl = ("peach", "pear", "apple", "banana");

console.log(fruitBowl);

fruitBowl(0)= "pear";

 console.log(fruitBowl);

 console.log(fruitBowl.length);

//created a variable to hold the number of pears in array

var numPear = 0;
//if statement to find out if each array is a pear

if (fruitBowl(0)=== "pear"){

    numPears ++;

}

else{

    console.log("this fruit is not a pear!");
}
//check item 2 in array
if (fruitBowl(1)=== "pear"){
    numPears ++;
}else{
    console.log("the fruit is not a pear");
}

console.log(numPears);

//check item 3 in array
if (fruitBowl(1)=== "pear"){
    numPears ++;
}else{
    console.log("the fruit is not a pear");
}

console.log(numPears);

var name = Prompt("What is your name?");

console.log(name);

//validate the prompt to see if it is empty
if (name === ""){
    name = prompt("Please enter your name. Don't leave it blank.");
}
console.log("Hello " +name+ " you have " + numPears + "pears in your fruit bowl" );

alert("Hello " +name+ " you have " + numPears + "pears in your fruit bowl" );