//in-line comments
/* multi-line comments*/

let myName = "Anoop"
console.log('myName');

/






/* Main types of functions */
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
a()
