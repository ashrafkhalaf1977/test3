

// document.write("hellow ashraf");

// document.getElementById("result").innerHTML="ashraf khalaf";

// document.getElementById("btn").onclick = function(){

//   document.getElementById("result").innerHTML="ashraf khalaf";

  

// }


// var x =2 , y = 3 ;


// x=x**2;

// console.log(x);

// var allitems = document.querySelectorAll(".list li");

// console.log(allitems);

const btnElement = document.querySelector('button');

const spanElement = document.getElementById("updatecontente")

btnElement.onclick = function(){

  const yourName = prompt("please enter your name!");

  spanElement.textContent = yourName;

}