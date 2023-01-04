x = 10; // this line sets a global variable X = 10

function myFunction(){ //this line defines a function called myFunction
    y = 5; //THis line defines a variable y with a value of 10
    //ans = y +. x; //This line is an error, but for some reaason if I leave it in, it breaks the whatTime() function..
    document.getElementById("error").innerHTML = ans; //this line sets HTMl element "error" = to ans
    console.log(ans); //this line is used for debugging with the webbrowser console
}

function whatTime(){ //this line defines a functoin called whatTime
    const d = new Date() //this line creates a constructor object d equal to the method Date()
    hour = d.getHours(); //this line sets var hour = to the current hour
    document.getElementById("time").innerHTML = hour; //this line sets HTML element time equal to hour
}

function isGreater(){ //this line defines a function isGreater
    x = 5; 
    y = 10;
    if (x > y){ //this line uses an if statement to compare x to y 
        document.getElementById("ifState").innerHTML = //this line sets html element ifSTate = to the folliwng string if x > y
        "5 is greater than 10";
    }
    else {
        document.getElementById("ifState").innerHTML = //this line sets html element ifState = to the following string if x !> y 
        "5 is not greater than 10";
    }
    }


function numCheck() { // this line defines a function called numCheck
    num = document.getElementById("number").value; // this line sets the var num = to the value of the html element number
    if (num != 40) { //this line compares num to 40
        str = "That is not my favorite number!"; //if the num != 40, write this string in html element "What_fav_num?"
    }
    else {
        str = "That is my favorite number!"; //if the num = 40, write this string in html element "What_fav_num?"
    }
    document.getElementById("What_fav_num?").innerHTML = str;
}

function Time_function() { //this line defines a function called Time_function
    var Time = new Date().getHours(); //this line sets var Time = to the newly created object Date().getHours()
    var Reply; 
    if (Time < 12 == Time > 0) { // this line compares Time to 12 and 0 using a == comparison
        Reply = "It is morning time!"; //writes this string to "Time_of_day" HTML if == comparison is true
    }
    else if (Time >= 12 == Time < 18) {  //writes this string to "Time_of_day" HTML if == comparison is true
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."; //writes this string to "Time_of_day" HTML if neither previous if statement is true
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}