const currentDate = new Date();
let currentHour = currentDate.getHours();
console.log(currentHour);
let timeBlocks = document.getElementsByClassName("hour");
console.log(timeBlocks);
var now = moment().format("dddd, MMMM Do");

var dateLine = document.getElementById("currentDay");
dateLine.textContent = "Today is " + now;

function changeColor() {
  for (i = 0; i < timeBlocks.length; i++) {
    console.log(timeBlocks.item);
  }
}
