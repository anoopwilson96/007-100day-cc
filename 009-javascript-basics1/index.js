// sum of two numbers//

function myFunction(a,b){
let sum= a+b
console.log(sum)
}

myFunction(8,2)
myFunction(1000,999)



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



myGrade(55)
myGrade(5)
myGrade(0)
myGrade(.22)
myGrade(200)
myGrade(90)
myGrade(.1)
myGrade(20001)