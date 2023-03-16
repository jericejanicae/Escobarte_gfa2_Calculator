/*function add() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").innerHTML = result;
}

function subtract() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 - num2;
  document.getElementById("result").innerHTML = result;
}

function multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("result").innerHTML = result;
}

function divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 / num2;
  document.getElementById("result").innerHTML = result;
}


<input type="text" id="num1">
<input type="text" id="num2">
<button onclick="add()">+</button>
<button onclick="subtract()">-</button>
<button onclick="multiply()">*</button>
<button onclick="divide()">/</button>
<p id="result"></p>

*/

function addition() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
}

function subtraction() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + result + ".";
}

function multiplication() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
}

function division() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 / num2;
  document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
}

function modulo() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 % num2;
  document.getElementById("result").innerHTML = "The remainder of " + num1 + " divided by " + num2 + " is " + result + ".";
}