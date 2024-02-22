//in-line comments
/* multi-line comments*/

/* let myName = "Anoop"
console.log('myName');



Main types of functions 
function showMessage() {
  console.log('Welcome to basics of JS')
}

let a = function showMessage(){
  console.log('Welcome again')
}

let showNewMessage = () => {
  console.log('Welcome again and agin')
}

showMessage()
a()
showNewMessage()
a() */

// Increment section
let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count+1 
    countEl.innerText=count
 
}
// reset section

let countRe = document.getElementById("count-el")
function reset() {
    count = 0
    countRe.innerText = count
}