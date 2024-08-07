function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return `${numberOne} is greater!`;
  } else if (numberOne < numberTwo) {
    return `${numberTwo} is greater!`;
  } else return "Both numbers are equal!";
}

console.log(greaterNumber(100, 50));
console.log(greaterNumber(50, 100));
console.log(greaterNumber(50, 50));
