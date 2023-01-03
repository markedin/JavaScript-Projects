function additionFunction() { //This line defines a function called additionFunction
    var ans = 2 + 2; //This line assigns a variable named ans to the sum of 2 + 2
    document.getElementById("Math").innerHTML = "2 + 2 = " + ans; //This line changes the html element with ID Math to the original text concatenated with the functions purpose
}

function subtractionFunction() { //This line defines a function called subtractionFunction
    var ans = 5 - 2; //This line assigns a variable named ans to the result of 5 - 2
    document.getElementById("Math2").innerHTML = "5 - 2 = " + ans; //This line changes the html element with ID Math2 to the original text concatenated with the functions purpose
}

function multiplication() { //This line defines a function called multiplicaiton
    var ans = 4 * 5;  //This line assigns a variable named ans to the product of 4 times 5
    document.getElementById("Math3").innerHTML = "4 * 5 = " + ans; //This line changes the html element with ID Math3 to the original text concatenated with the functions purpose
}

function division() { //This line defines a function called division
    var ans = 30 / 10;  //This line assigns a variable named ans to the result of 30 divided by 10
    document.getElementById("Math4").innerHTML = "30 / 10 = " + ans; //This line changes the html element with ID Math4 to the original text concatenated with the functions purpose
}

function lotsOfmath() { //This line defines a function called lotsOfmath
    var ans = 4/2 + 2*4;  //This line assigns a variable named ans to the result of 4 divided by 2 plus the product of 2 and 4
    document.getElementById("Math5").innerHTML = "4/2 + 2*4 = " + ans; //This line changes the html element with ID Math5 to the original text concatenated with the functions purpose
}

function modulus(){ //This line defines a function called modulus
    var ans = 20 % 3;  //This line assigns a variable named ans to the remainder of 20 divided by 3
    document.getElementById("Math6").innerHTML = "When you divide 20 by 3 you get a remainder of: " + ans; //This line changes the html element with ID Math6 to the original text concatenated with the functions purpose
}

function negation() { //This line defines a function called negation
    var ans = 10;  //This line assigns a variable named ans to the additive inverse of 10
    document.getElementById("Math7").innerHTML = "The negation operator turns 10 into: " + -ans; //This line changes the html element with ID Math7 to the original text concatenated with the functions purpose
} 

function increment() { //This line defines a function called increment
    var ans = 5;  //This line assigns a variable named ans to 5 incremented
    ans++; //This line increments 5 once, which makes the local ans variable equal to 6
    document.getElementById("Math8").innerHTML = "If you increment 5, you get: " + ans; //This line changes the html element with ID Math8 to the original text concatenated with the functions purpose
}

function decrement() { //This line defines a function called decrement
    var ans = 5;  //This line assigns a variable named ans to 5 decremented
    ans--; //THis line decrements 5 once, which makes the local ans variable equal to 5
    document.getElementById("Math9").innerHTML = "If you decrement 5, you get: " +ans; //This line changes the html element with ID Math9 to the original text concatenated with the functions purpose
}

function getRandom() { //This line defines a function called getRandom
    var ans = 1 * (Math.random());  //This line assigns a variable named ans to a random number between 0 and 1
    document.getElementById("Math10").innerHTML = "A random number between 0 and 1 is: " + ans; //This line changes the html element with ID Math10 to the original text concatenated with the functions purpose
}

function getEulers() { //This line defines a function called getEulers
    var ans = (Math.E);  //This line assigns a variable named ans to Eulers number
    document.getElementById("Math11").innerHTML = "Euler's number is: " + ans; //This line changes the html element with ID Math11 to the original text concatenated with the functions purpose
}