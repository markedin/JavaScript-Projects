function getReceipt() {
    //this inditializes our string so it can get passed from function to function
    // growing line by line into a full receipt
    var text1="<h3>You Ordered:</h3>"; 
    var runningTotal = 0; // this line creates a var to hold our running total for price of pizza
    var sizeTotal = 0; 
    var sizeArray = document.getElementsByClassName("size"); // this line sets the size array equal to the
                                                            //elements with the class name "size"
    for (var i=0; i < sizeArray.length; i++) {  // this loop looks through the sizeArray and stores the selected size with a 
                                                //<br> in the string in text1
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; //this line sets the selectedSize variable = to the sizeArray value that is checked
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //this and the following else if statements check if selectedSize is equal to the 
                            //size name (string), and then sets the var size total to the price of the selected size
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza"){
        sizeTotal = 8;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Party Pleaser Pizza") {
        sizeTotal = 25;
    }
    runningTotal = sizeTotal;    // this line sets the current running total equal to the size sizeTotal that was determined in the previous loop
    console.log(selectedSize+" = $"+sizeTotal+".00"); //this line outputs the selected pizza size and the price of the pizza size into the console
    console.log("size text1: "+text1); //this line outputs the str stored in text1 with a preface to the console
    console.log("subtotal: $"+runningTotal+".00"); // this line outputs the current subtotal to the console (based on running total)
    //these variables will get passed onto each function
    getTopping(runningTotal,text1); //this line runs the getTopping function, and passes in the current running total and text1 str
};

function getTopping(runningTotal, text1) { //this function is used to collect the values that were checked for toppings in the HTML document, and performs various actions in the console
    var toppingTotal = 0; 
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); //this line sets toppingArray equal to all of the HTML elements with the class name "toppings"
    for (var j = 0; j < toppingArray.length; j++) { //this loop iterates through the toppingArray array, and uses .push to add the value of the HTML selected topping to the 
                                                    //selectedTopping array, which we will use to output the selected toppings to the console as well as the HTML page
        if (toppingArray[j].checked) {      //this line checks if the current toppingArray at index j is checked
            selectedTopping.push(toppingArray[j].value); // if the value at index j is checked, it will push the topping name to the array selectedToppings at the current index j
            console.log("selected topping item: ("+toppingArray[j].value+")"); // this line outputs a string to the console describing what topping was selected (at index j)
            text1 = text1+toppingArray[j].value+"<br>"; //this line sets text1 equal to itself plus the new topping that was just determined if it was added to the pizza or not
        }
    }
    var toppingCount = selectedTopping.length; //this line sets toppingCount equal to the number of selected toppings
    if (toppingCount > 1) { //this if statement checks if the topping count is more than 1, and the removes a value of 1 because the first topping is free!
        toppingTotal = (toppingCount -1); //removing 1 from the total topping count, but keeping the name of the topping in the selectedTopping array
    } else {
        toppingTotal = 0; 
    }
    runningTotal = (runningTotal + toppingTotal); //the running total is equal to itself plus the number of toppings added (minus 1!)
    console.log("total selected topping items: " + toppingCount); //this line and the following lines output strings to the console describing what toppings were selected, 
                                                                //that the first topping is free, and then the purchase total of the customized pizza
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    //the following lines set the HTML elements "showText" and "totalPrice" equal to the type of pizza/what toppings were ordered and the total price of the customized pizza, respectively
    document.getElementById("showText").innerHTML= text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+".00"+"</strong></h3>";
};