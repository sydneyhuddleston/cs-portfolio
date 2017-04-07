// variable that represents that is the countdown date
var countdownDate = new Date("Jun 9, 2017 01:00:00").getTime(); // date 
// This sets the countdown to be updated every one second
var updateCountdown = setInterval(function() {
// this is the variable that gets the current time and date
var today = new Date().getTime();
    // // this is the difference between the countdown date and current date in milliseconds
    var difference = countdownDate - today;
    // // this code converts the difference to the appropriate amount of time
    // // milliseconds to days
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    // // milliseconds to hours
    var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    // // milliseconds to minutes
    var minutes = Math.floor((difference / 1000 / 60) % 60);
    // // milliseconds to seconds
    var seconds = Math.floor((difference / 1000) % 60);
    // this displays the value of the above variables
    document.getElementById("countdownDisplay").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // this is the if statement that will turn my display red if the value of the difference of my days is below zero
    if (difference < 0) {
    var pageTimer = document.getElementById("countdownDisplay");
    pageTimer.style.color = "red";
  }
    // 1000 represents my display updating every one second
}, 1000);


