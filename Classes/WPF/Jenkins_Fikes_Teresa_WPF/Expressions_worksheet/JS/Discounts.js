/*
 Teresa Jenkins Fikes
 WPF 1408 Section 01
 Go To training Week 2
 */
alert("Calculate the discounted price for an item");

//Ask the user the original price
//Create a variable to catch their answer
alert("What is the Original Price?");
var a = originalPrice = prompt("What is the Original Price?");
console.log(originalPrice);


//Ask the user what is the Discount Percentage?
alert("What is the discount percentage?");
var discountPercentage =prompt("What is the discount percentage?");
console.log(discountPercentage);

//Ask the user the description of the item.

alert("Description of item.");
var descriptionOfItem = prompt("Description of item.");
console.log(descriptionOfItem);

//Price of the item with tax

alert("What is the tax rate?");
var tax = prompt ("What is the tax rate?");
console.log(tax)

//Price of the item without tax

alert("Price without tax.");
var withoutTax;

alert(“Your descriptionOfItem was originally $originalPrice, but after a discountPercentage% discount, it is now $withoutTax without tax, and $tax with tax.”);

var answer = "(" = String(originalPrice) + "*" + String(discountPercentage) + "=" + String(PercentageAmount) + "-" + String(originalPrice) + "*" + String(salesTaxPercentage) + "=" + String(tax) + "+" + String(discountedPrice);





