function myfirstFunction() { //this line is defining the function name
    var xstr = "This is the"; //this line is assigning a str to the xstr variable
    var ystr = " button text"; //this line is assigning a str to the ystr variable
    var btstr = xstr + ystr; //this line is concatenating xstr and ystr and assigning it to the btstr variable
  
    document.getElementById("Button_Text").innerHTML = btstr; //this line uses getElementById method to return an element with a specified value
}

function mysecondFunction() { //this line is defining the function name
    var xstr = "This is the first half of the string "; //this element is assigning a str to the xstr variable.
                                    //I can use the same var name as the above function because this function 
                                    //only sees the "local variables"
    xstr += "and this is the second half of the string."; //This line is concatenating the xstr and the newly written str 
                                    //to create a new longer str
 
    document.getElementById("concatenate").innerHTML = xstr; //this line uses getElementById method to return an element with a specified value
}