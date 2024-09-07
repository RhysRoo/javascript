const number = 15;

for (i = 1; i <= number; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz")
  }
  else if(i % 3 == 0){
    console.log("Fizz")
  }
  else if(i % 5 == 0){
    console.log("Buzz")
  }
  else if(i == number){
    break
  }
  else{
    console.log(i)
  }
}