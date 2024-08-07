const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let counter = 0;

  for (let element of list)
    if (typeof element === "string") {
      counter += element.length;
    } else if (typeof element === "number") {
      counter += element;
    }

  return `El valor es ${counter}`;
}

console.log(averageWord(mixedElements));
