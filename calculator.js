//Getting all elements required
const numButton = document.getElementsByClassName("num_button");
const opButton = document.getElementsByClassName("op_button");
const clearButton = document.getElementsByClassName("clear_button");
const equalButton = document.getElementsByClassName("equal_button");
const input = document.getElementById("input");
//Clear Function to clear last input
function clearFunction() {
  if (input.value == null) {
  } else {
    var inputText = input.value;
    input.value = inputText.slice(0, -1);
  }
}

//The most imp function to find the value of given user operation
function equalFunction() {
  var fullInp = String(input.value);
  input.value = eval(fullInp);
}

//Function to append pressed input to the input element
function inputFunction() {
  var inp = this.textContent;
  console.log(input.value);

  console.log("Pressed Button" + inp);
  var fullInp = String(input.value);
  var lastInput = fullInp.charAt(fullInp.length - 1);
  console.log("Last Input" + lastInput);
  if (
    (lastInput == "/" || "*" || "+" || "-" || "." || input.value == "") &&
    (inp == "/" || "*" || "-" || "+" || ".")
  ) {
    input.value += this.textContent;
  } else {
  }
}

// Adding Event Listeners to buttons
for (button of numButton) {
  button.addEventListener("click", inputFunction);
}
for (button of opButton) {
  button.addEventListener("click", inputFunction);
}
clearButton[0].addEventListener("click", clearFunction);
equalButton[0].addEventListener("click", equalFunction);

//Enter Button Event Listener
input.onkeyup = function (e) {
  if (e.keycode === 13) {
    equalFunction();
  }
};

//Done
