// var operator = document.getElementById('operator');

// object.addEventListener("click", myScript);



var num1input = document.getElementById("num1input");
var num2input = document.getElementById("num2input");
var solve = document.getElementById("solve");
var selectOperator = document.getElementById("selectOperator");
var answer = document.getElementById("answer");


solve.addEventListener("click", function(){
   
    var value1 = parseInt(num1input.value);
    var value2 = parseInt(num2input.value);
    var dropdown = selectOperator.value;

    
    if(dropdown === "plus") {
     answer.innerHTML = value1 + value2;
    }
    
    if(dropdown === "minus") {
        answer.innerHTML = value1 - value2;
    }
    
    if(dropdown === "multiply") {
        answer.innerHTML = value1 * value2;
    }
    
    if(dropdown === "divide") {
        answer.innerHTML = value1 / value2;
    }
    
    if(dropdown === "modulus") {
        answer.innerHTML = value1 % value2;
    }
    
    if(dropdown === "exponent") {
        answer.innerHTML = Math.pow(value1,value2);
    }
    
});

