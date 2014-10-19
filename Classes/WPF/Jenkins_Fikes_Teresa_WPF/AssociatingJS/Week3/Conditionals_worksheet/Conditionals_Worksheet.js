/**
 * Teresa Jenkins Fikes
 * 10/16/14.
 * WPF 1408 Section 01
 Conditionals Week 3-Movie Ticket Price
 */
//Ticket Movie Prices



    function printPrice() {
        var movie = document.getElementById("movie").value;
        var name = document.getElementById("textbox").value;
        var Cquantity = document.getElementById("Cquantity").value * 1;
        var Aquantity = document.getElementById("Aquantity").value * 1;
        var total = 0;
        var sentence = ("The ticket price is + "X");
        var price = document.getElementById('Ctickets').value * Cquantity;

    sentence += name + "<br>purchased "+Cquantity+" Child ticket(s) to \"";
    sentence += movie + "\" for $";
    sentence += price;
    total += price;

    price = document.getElementById('Atickets').value * Aquantity;
    sentence += "<br>and "+Aquantity+" Adult ticket(s) to \"";
    sentence += movie + "\" for $";
    sentence += price +'<br>';
    total += price;

    sentence += "<br>";
    sentence += 'Total cost: $'+total;
    console.log("inserts").innerHTML=sentence;
}


