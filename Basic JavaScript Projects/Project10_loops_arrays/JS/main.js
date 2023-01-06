function countTo10() { // this line defines a function countTo10
    num = 0; // this line defines a variable num
    str = ""; // this line defines an empty string
    while (num <= 10) { // this while loop will run while num is less than or equal to 10
        str += "<br>" + num; // this line adds a break statement to the empty string as well as the num value
        num++; // increment the num value
    }
    document.getElementById("Loop").innerHTML = str; // this line sets the HTML element "Loop" equal to the current str value
}


instruments = ["Banjo", "Piano", "Guitar", "Violin", "Cello", "digeredoo"]; // this line defines an array of strings
string = ""; // this line defines an empty string
x = 0;  // this line defines x   
function for_loop() {  // this line defines a function called for_loop
    for (x = 0; x < instruments.length; x++){   // this line defines a for loop with x = 0, and it will run while x is less than the length of the instruments array
        string += instruments[x] + "<br>"; // this line adds the instrument at index x and a break statement to the empty string
    }
    document.getElementById("list_of_instruments").innerHTML = string; // this line changes the HTML element "list_of_instruments" to whatever the current string in "string" is 
}

function cat_pics(){ // this line defines a function called cat_pics
    var Cat_Picture = [];      // this line defines an empty array
    Cat_Picture[0] = "sleeping"; // this line fills the empty array with sleeping at index 0
    Cat_Picture[1] = "playing"; // this line fills the array with playing at index 1
    Cat_Picture[2] = "eating"; // this line fills the array with eating at index 2
    Cat_Picture[3] = "purring"; // this line fills the array with purring at index 3
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +  // this line changes the HTML element Cat to the string eating, because it is the string at the index 2 of the array
        Cat_Picture[2] + ".";
}

function constant_function(){   // this line defines a function called constant_function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; // this line defines a constant Musical_Instrument
    Musical_Instrument.color = "blue"; // This line sets the color of the instrument blue, which isnt possible because the instrument is a constant
    Musical_Instrument.price = "$900"; // this line sets the price of the instrument to 900
    Musical_Instrument.handedness = "left"; // this line sets the handedness of the instrument to left
    Musical_Instrument.price = "$1,200"; // this line sets the price of the instrument to 1200, which is fine because the price of the instrument was not defined to be a constant
    document.getElementById("Constant").innerHTML = "The cost of the " +  // this line sets the HTML element Constant to the following string including the properties of the constant object Musical_Instrument
        Musical_Instrument.handedness + " handed " + Musical_Instrument.type + 
        " was " + Musical_Instrument.price;
}

function scopeExample(){ // This line defines a function called scopeExample
    var y = 100; // this line defines a variable y and sets it = to 100
    {
        let x = 50; // this line defines x equal to 50
        document.getElementById("scope").innerHTML = y + "<br>" + x; // this line sets the HTML element scope = to the string y + <br> x
    }

}

function returnExampleFunction(){ // this line defines the function returnExampleFunction
    return Math.PI; // this line returns the value of pi
}

function returnExample() { // this line defines a function called returnExample
    document.getElementById("return").innerHTML = returnExampleFunction(); // this line sets the HTML element return to the output of the returnExampleFunction
}

let truck = { // this line defines an object called truck
    make: "Ford ", // this line defines an object property of the truck object
    model: "F150 ",// this line defines an object property of the truck object
    year: "2022 ",// this line defines an object property of the truck object
    color: "blue ",// this line defines an object property of the truck object
    description : function() { // this line defines a method within the truck object
        return "The truck is a " + this.year + this.color + this.make + this.model; // this line returns a string
        }
};
function objectExample(){ // this line defines a function called objectExample
    document.getElementById("truck_object").innerHTML = truck.description(); // this line changes the HTML element truck_object to the string created by truck.description()
}
