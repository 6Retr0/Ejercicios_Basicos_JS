const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  const counter = {};

  list.forEach((element) => {
    counter[element] = (counter[element] || 0) + 1;
  });

  return counter;
}

console.log(repeatCounter(words));
