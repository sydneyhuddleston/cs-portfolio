// define variables here
        // first text box input value
var num1input = document.getElementById("num1input");
        // second text box input value
var num2input = document.getElementById("num2input");
        // solve button
var solve = document.getElementById("solve");
        // dropdown menu
var selectOperator = document.getElementById("selectOperator");
        // div for answer to show up
var answer = document.getElementById("answer"); // div

// this is where we will make our button work
solve.addEventListener("click", function(){
// these variables will be used in our conditional statements as the values of the input boxes  
        // value of input box 1
    var value1 = parseInt(num1input.value);
        // value of input box 2
    var value2 = parseInt(num2input.value);
        // value of dropdown menu
    var dropdown = selectOperator.value;

    // what will happen if the user selects the addition feature
    if(dropdown === "plus") {
     answer.innerHTML = value1 + value2;
    }
    // what will happen if the user selects the subtraction feature
    if(dropdown === "minus") {
        answer.innerHTML = value1 - value2;
    }
    // what will happen if the user selects the multiplication feature
    if(dropdown === "multiply") {
        answer.innerHTML = value1 * value2;
    }
    // what will happen if the user selects the division feature
    if(dropdown === "divide") {
        answer.innerHTML = value1 / value2;
    }
    // what will happen if the user selects the percentage feature
    if(dropdown === "modulus") {
        answer.innerHTML = value1 % value2;
    }
    // what will happen if the user selects the exponent feature
    if(dropdown === "exponent") {
        answer.innerHTML = Math.pow(value1,value2);
    }
    
});

