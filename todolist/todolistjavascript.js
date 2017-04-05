var enter = document.getElementById("enter"); /* input */

var add = document.getElementById("add"); /* button */

var taskEntered = enter.value;

var enterTwo = document.getElementById("enterTwo");

var dropdownMenu = document.getElementById("selectOperator");
var newAllTasks =  document.getElementById("newAllTasks");


document.getElementById("add").addEventListener("click", function() {

     var list = document.createElement("LI");
     var textList = document.createTextNode(enter.value);
     list.appendChild(textList);
     document.getElementById("newAllTasks").appendChild(list);
     
     if (dropdownMenu.value == "red") {
         newAllTasks.style.color = "red"; 
     }
     if (dropdownMenu.value == "orange") {
         newAllTasks.style.color = "orange"; 
     }
     if (dropdownMenu.value == "yellow") {
         newAllTasks.style.color = "yellow"; 
     }
     if (dropdownMenu.value == "green") {
         newAllTasks.style.color = "green"; 
     }
     if (dropdownMenu.value == "blue") {
         newAllTasks.style.color = "blue"; 
     }
     if (dropdownMenu.value == "purple") {
         newAllTasks.style.color = "purple";
     }

});

document.getElementById("newAllTasks").addEventListener("click", function() {
     var deleteTask = event.target;
     deleteTask.parentNode.removeChild(deleteTask);
});


