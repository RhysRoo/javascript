let multiple = 9;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (i = 0; i <= numbers.length; i++){
  console.log(multiple, "x", i, "=", multiple * i);
  if(i > numbers.length){
    break
  }
}