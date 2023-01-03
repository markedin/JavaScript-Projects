function dictionary(){  //THis line defines a funciton called dictionary
    var Car = {  //This line defines a variable called car, and this variable is made equal
                //to a dictionary, which a set list of KVP's
    Make : "Subaru", //This year defines Car.Make as Subaru
    Year : "2007",  //This line defines Car.Year as 2007
    Model : "STi",  //This line defines Car.Model as STi
    Motor : "Flat 4 Boxer", //This line defines Car.Motor as Flat 4 boxers
    HP : 300  //This line defines Car.HP as 300
    };
    delete Car.Year; //This line deletes the dicitonary entry of Car.Year
    document.getElementById("Dictionary").innerHTML = Car.Year;  //This line changes the
    //HTML element with the ID Dictionary to Car.Year, which in this case is undefined
    //because we deleted that dictionary entry in the line prior
}