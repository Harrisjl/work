var theParent = document.querySelector("#theBox");

for (var i = 0; i < theParent.children.length; i++) {
  var childElement = theParent.children[i];
  childElement.addEventListener("click", doSomething, false);
}

function doSomething(e) {
  var clickedItem = e.target.id;
  alert("Hello " + clickedItem);
}
/*
<body>
<h2>JavaScript addEventListener()</h2>

<p>This example uses the addEventListener() method to add many events on the same button.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}
  */
