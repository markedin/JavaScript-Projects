document.write(typeof "hello"); //This line writes the type of the string "hello"
document.write("10" + 1);// this line writes 101 with coercion

function getNaN(){ //this line defines a function called getNaN
    ans = 0/0; //this line divides 0 by 0
    document.getElementById("Math").innerHTML = ans; // this line changes the element Math to the value of ans
}

function getNaNTrue(){ //this line defines a function called getNaNTrue
    ans = "string"; //this line sets ans to the string "string"
    document.getElementById("Math2").innerHTML = isNaN(ans);// this line changes the element Math2 to the value of ans
}

function getNaNFalse(){ //this line defines a function called getNaNFalse
    ans = 10; //this line sets ans to 10
    document.getElementById("Math3").innerHTML = isNaN(ans);// this line changes the element Math3 to the value of ans
}

function infinity(){ //this line defines a function called infinity
    ans = 9E1000; //this line sets ans to 9E1000 (infinity)
    document.getElementById("Math4").innerHTML = ans;// this line changes the element Math4 to the value of ans
}

function negInfinity(){ //this line defines a function called negInfinity
    ans = -9E1000; //this line sets ans to -9E1000 (neg infinity)
    document.getElementById("Math5").innerHTML = ans;// this line changes the element Math5 to the value of ans
}

function notFunctionTRUE(){ //this line defines a function called notFunctionTRUE
    document.getElementById("Not").innerHTML = !(20<10);// this line changes the element Not to the boolean value of !(20<10)
}

function notFunctionFALSE(){ //this line defines a function called notFunctionFALSE
    document.getElementById("Not2").innerHTML = !(20>10);// this line changes the element Not2 to the boolean value of !(20>10)
}

//document.write(10>3); //this line isnt used 

console.log(10<3); //this line displays "false" in the browser console

console.log(3+5);  //this line displays "8" in the browser console

document.write(10 == 10); //this line writes true to the document
document.write(10 == 1);  //this line writes false to the document

document.write(10 === 10);  //this line writes true to the document
document.write(4 === "potato");  //this line writes false to the document
document.write(4 === "4");  //this line writes false to the document
document.write("potato" === "pototo");  //this line writes false to the document

document.write(5>3 && 8>2);  //this line writes true to the document
document.write(5>3 && 8<2);  //this line writes false to the document
document.write(5>3 || 5<3);  //this line writes true to the document
document.write(5<3 || 8<3);  //this line writes false to the document
