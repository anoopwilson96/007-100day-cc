// sum of two numbers//

/*function myFunction(a,b){
let sum= a+b
console.log(sum)
}

myFunction(8,2)
myFunction(1000,999)

function hiFunction() {
  alert('Welcome')
  
}*/

//90 or above is A+ | 80 or above is A | 70 or above is B+ | 60 or above is B | 50 or above is C+ | Below 50 is failed//

function myGrade(grade){

  if (grade >100) {
    console.log('Grade error')    
  }
  else if(grade >= 90){
    console.log('Your grade is A+');
  }
  else if (grade >= 80){
    console.log('Your grade is A');
  }
  else if (grade >= 70){
    console.log('Your grade is B+')
  }
  else if (grade >= 60){
    console.log('Your grade is B')
  }
  else if(grade >= 50 ){
    console.log('Your grade is C+')
  }
  else if(grade < 50){
    console.log('Sorry, you are failed')
  }
  else if(grade < 0){
    console.log('Grade error')
  }
  else {
    console.log('Grade erro')
  }
}




myGrade(200)
myGrade(90)
myGrade(.1)
myGrade(20001)
myGrade(10)



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


// form validation using JavaScript

const age= document.getElementById('age')
const submit= document.getElementById('submit-btn')
const error=document.getElementById('errorText')

submit.addEventListener('click',checkAge)

function checkAge(){
  let ageInput= age.value
  if (ageInput<= 0 || ageInput>110) {
    event.preventDefault();
    console.log("Button is clicked")
    error.classList.remove('hide')
    error.innerHTML = 'Error: Enter age between 0 and 110'

    
  }
  else{
    event.preventDefault();
    error.classList.add('hide')
   
  }
}