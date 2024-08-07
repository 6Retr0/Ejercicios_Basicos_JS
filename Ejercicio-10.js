const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let addition = 0;
  for (let number of numberList) {
    addition += number;
  }
  const result = addition / numberList.length;
  return result; 
}

console.log(average(numero))