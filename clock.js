
// var countDown = new Date("25:00");
// var minute = countDown.Minutes();
// console.log(minute)


// var x = setInterval(function() {

// });

// // DOM Variable


var sec = 59; // global variable
var min = 24;
//var reset
var interval;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let incButton = document.getElementById("inc");
let decButton = document.getElementById("dec");

// //click event
function timeIt() {
    document.getElementById("second").innerHTML = sec;
    document.getElementById("minute").innerHTML = min;
    sec--;
    if (sec == 0) {
        sec = 59;
        min--
       
    }
}
 //      timer.html(timeLeft - counter);
  startButton.addEventListener("click",function() {
     interval = setInterval(timeIt,1000);
     
     //setInterval(timeIt,1000); //this timeIt event happened at every 1000ms 
});

  stopButton.addEventListener("click",function() {
     clearInterval(interval);
    });
 
    

 resetButton.addEventListener("click",function() {
    clearInterval(interval)
    sec = document.getElementById("second").innerHTML = 00;
    min = document.getElementById("minute").innerHTML = 25;
    sec = 59;
    min = 24;
    });

 incButton.addEventListener("click",function() {
    min += 5;
    });

 decButton.addEventListener("click",function() {
    min -= 5;
    });
 

