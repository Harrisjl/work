// var haveMoney;
// var fastFood;
// var type;
// var restaurant;

// haveMoney = true;
// fastfood = false;
// homeMade = "no";
// type = "burger";
// restaurant = "deli";

// if(haveMoney){
// if(fastFood){
//   if(type === "burger"){
//       console.log("5guys");
//   } else if(type === "wings"){
//       console.log("aTown");
//     } else if(type === "salad"); {

// }

//     } else if(homeMade === "yes"){
//      console.log("goHome");
//     } else if(homeMade === "don't like it"){
//     console.log("ask a friend"); {

//     } else if()

//Declaring Variables

var firstName;
var lastName;

var num1 = 100;
var selected = true;

// Assigning values to variables

firstName = "John";
lastName = "Smith";

var fullName = firstName + " " + lastName;

//Output

console.log(fullName);
console.log(num1);
console.log(selected);

var age = 27;
var age2 = "28";
var totalage = age * age2;
var bonus = 2 + true;

console.log(totalage);
console.log(2 + true);

// Bonus returned: 3

//Conditional homework

var t = 2;
t = t + 5; // console is 7
console.log(t);
t *= 2; // console is 14
console.log(t);
t %= 3;
t %= 2;
console.log(t);
if (t < 10) {
  greeting = "Good morning";
} else if (t < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(t + greeting);

// Loop Work

var hat = 1;

/*for (hat; hat < 51; hat++) {
  console.log(hat);
}
*/
// While Loop Work

var i = 1;

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

var t = 0;

for (t; t < 100; t++) {
  if (t % 3 === 0 && t % 5 === 0) {
    console.log(t + " fizz");
  } else if (t % 3 === 0) {
    console.log(t + " buzz");
  } else if (t % 5 === 0) {
    console.log(t + " fizzbuzz");
  }
}

// Function arguments 1-5

function add(p, y) {
  return p + y;
}
console.log(add(4, 7)); //11

function multiply(p, y) {
  return p * y;
}
console.log(multiply(4, 7));

function myFun(start, end) {
  for (var o = start; o <= end; o++) {
    console.log(o);
  }
}
myFun(6, 8);

var teamName = "Steelers";

function myFunction(name) {
  return teamName + name;
}
console.log(myFunction(1));

var food = "food";

(function(steak) {
  console.log(steak);
})(food);

var str = "a amd 55.";
var len = str.length;
console.log(len);
console.log(str[0]);
console.log(str[1]);

//for (var i = 0; i < str.length; i++) {}

var str = "hello world";
if (1 === 1) {
  console.log(false);
} else {
  console.log("crazy");
}

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}
var upperCase = str.toUpperCase();
console.log(upperCase);
console.log(upperCase.toLowerCase());

if (1 === 1) {
  console.log(true);
} else {
  console.log("false");

  var str = "hello world";

  if (str.includes("hello")) {
    console.log("included");
  } else {
    console.log("excluded");
  }
}
var rand = Math.floor(Math.random() * 11);

function randomCheck() {
  var x = document.getElementById("userInput").value;
  if (x == rand) {
    console.log("Success");
  } else {
    console.log("try again");
    console.log(rand);
    console.log(x);
  }
}
