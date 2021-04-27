/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(provided_time) {
  let greeting = ""
  let my_hour = provided_time.split(':')[0]
  if (my_hour < 12) {
    greeting = "Good Morning"
  }
  else if (my_hour < 17) {
    greeting = "Good Afternoon"
  }
  else {
    greeting = "Good Evening"
  }
  return greeting
}

function displayMessage(message) {
  let new_node 
  new_node = document.getElementById("greeting");
  new_node.innerText = message;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

