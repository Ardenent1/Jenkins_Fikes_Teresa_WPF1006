/**
 * Teresa Jenkins Fikes
 * WPF 1408 Section 01
 * Screencast Functions week 4
 * 10/21/14.
 */
//Functions - Variable Scope

var width = 5;
}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
calcArea();
console.log(width);