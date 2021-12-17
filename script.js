// Declaring some variables
const currentDate = new Date();
let currentHour = currentDate.getHours();
console.log(currentHour);
let timeBlocks = document.getElementsByClassName("input");
console.log(timeBlocks);
var now = moment().format("dddd, MMMM Do");

var dateLine = document.getElementById("currentDay");
dateLine.textContent = "Today is " + now;

// This is the function to change the color of the time blocks based on the current time.
function changeColor() {
  for (i = 0; i < timeBlocks.length; i++) {
    console.log(timeBlocks.item);
    if (timeBlocks[i].dataset.hour < currentHour) {
      timeBlocks[i].classList.add("past");
    } else if (timeBlocks[i].dataset.hour > currentHour) {
      timeBlocks[i].classList.add("future");
    } else if (timeBlocks[i].dataset.hour === currentHour) {
      timeBlocks[i].classList.add("present");
    } else {
      return;
    }
  }
}

// Calling the function just declared to make the time block colors dynamic based on the current time.
changeColor();

// Setting the text input to local storage (This doesn't work).
const saveButton = document.getElementsByClassName("saveBtn");

for (i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener("click", function (event) {
    localStorage.setItem("todo", event.target.innerHTML);
    console.log(localStorage);
  });
}
