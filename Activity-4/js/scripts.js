var user = "Mike";
var salutations = "Hello, ";
var greeting = salutations + user  + "! Here are the latest HamoCrate reviews.";
var greetingEL = document.getElementById('greetings');

greetingEL.textContent = greeting;


//product price
var price = 20;
    studentDiscount=.10;
    studentPrice= price - (price * studentDiscount);
    priceEL = document.getElementById('price');
    studentPriceEL = document.getElementById("student-price");

priceEL.textContent=price.toFixed(2);
studentPriceEL.textContent = studentPrice.toFixed(2);
