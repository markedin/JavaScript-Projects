function rideFunction(){ //This line defines a function called rideFunction
    var Height, Can_Ride; //This line defines variables Height and Can_Ride
    Height = document.getElementById("Height").value; //This line sets Height = to the value of height in the HTML doc
    Can_Ride = (Height <52) ? "You are too short ":"You are tall enough "; //This doc checks if Height is less than 52
    document.getElementById("Ride").innerHTML = Can_Ride + "to ride."; //This line outputs if the rider is tall enough to ride or not
}

//function canVote(){  //unused
   // var Age, Can_vote;  //unused
  //  Age = document.getElementById("Age").value;  //unused
  //  Can_vote = (Age<18) ? "You are NOT old enough ": "You are old enough ";  //unused
  //  document.getElementById("bday").innerHTML = Can_vote + "to vote.";  //unused
//}

function Animal(Name, Type, Age, Color) {  //This line defines an object constructor called Animal
    this.Animal_name = Name; // This line sets "newObject".Animal_name = to whatever was inputted to the new object
    this.Animal_type = Type;  // This line sets "newObject".Animal_type = to whatever was inputted to the new object
    this.Animal_age = Age;  // This line sets "newObject".Animal_age = to whatever was inputted to the new object
    this.Animal_color = Color;  // This line sets "newObject".Animal_color = to whatever was inputted to the new object
}

var myCat = new Animal("Mavis", "Calico", 2, "White, Orange and Brown"); //this line defines a new object myCat with the type of the Animal constructor object

function myFunction(){  //This line defines a function called myFunction
    document.getElementById("New_and_This").innerHTML = //this line sets the HTML element "New_and_This" to the following string
    "My cats name is " + myCat.Animal_name + " and she is a "+myCat.Animal_age + " year old " //"following string"
    + myCat.Animal_type +"."; //"following string"
}

function nestedFunction(){  //This line defines a function called nestedFunction
    document.getElementById("Nested_Function").innerHTML = Count(); //this line sets the HTML element "Nested_Function" to the output of the function Count()
    function Count() { //this line defines a new funciton called Count()
        var ans = 5; //This line sets the var ans = to 5
        function increment() {ans += 1;} //this line defines a new function increment which adds 1 to ans
        increment(); //this line runs increment()
        return ans; //this line returns ans
    }
}