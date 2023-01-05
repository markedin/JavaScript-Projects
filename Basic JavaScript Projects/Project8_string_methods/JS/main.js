function sliceMethod() { //This line defines a function called sliceMethod
    Sentence = "All work and no play makes Johnny a dull boy.";     //this object defines a string "Sentence"
    Section = Sentence.slice(27,33);    //this line slices the string to display the char positions within the parameters inside the .slice() method
    document.getElementById("Slice").innerHTML = Section;   //this line sets the HTML element "Slice" to the sliced string
}


function concatenate(){ // this line defines a function called concatenate
    string1= "This is the first string and "; // this line defines a string
    string2= "this is the second string concatenated together"; // this line defines a string
    str= string1.concat(string2); // this line concatenates string 1 with string 2
    document.getElementById("concat").innerHTML = str; // this line replaces the HTML element with the id concat with str
}

function upperCase(){   //this line defines a function called upperCase
    string = "This string started as lower case";  //this line defines a string callled "string"
    upStr = string.toUpperCase();   // this line converts the string to upper case and stores it in upStr
    document.getElementById("uppercase").innerHTML = upStr;  //this line writes the upStr to the HTML element with id uppercase
}

function searchFunction(){  // this line defines a function called searchFunction
    string = "A B C D E F G";   //this line defines a string 
    searchStr = string.search("D");     // this line searches for the position of "D" within the string "string"
    document.getElementById("searchfunction").innerHTML = searchStr; //this line writes the position of "D" to the HTML element with id searchfunction
}

function num2str(){ // this line defines a function called num2str
    x = 68419;  // this line defines a number
    document.getElementById("Number2String").innerHTML = x.toString(); // this line converts the number var x to a string 
}

function precisionMethod(){     //this line defines a function called precisionMethod
    x = 123.456789; //This line defines a number called x
    document.getElementById("Precision").innerHTML = x.toPrecision(4); // this line converts number x to a number with 4 digits total
}

function toFixedMethod(){   //this line defines a function called toFixedMethod
    x = 123.456789; //this line defines a number x
    document.getElementById("toFixed").innerHTML = x.toFixed(5); // // this line converts number x to a floating point number with 5 significant figures
}

function obStr2str(){ // this line defines a function called obStr2str
    str = "Hello World! I am an string";    // this line defines a string
    document.getElementById("obStr").innerHTML = str.valueOf();     //this line converts a string object to a string without changing the string itself
}