const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  const uniqueElements = [];
  for (let word of list) {
    if (!uniqueElements.includes(word)) {
      uniqueElements.push(word);
    }
  }
  return uniqueElements;
}

console.log(removeDuplicates(duplicates));
