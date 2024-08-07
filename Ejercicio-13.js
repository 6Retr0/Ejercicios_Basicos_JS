const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, name) {
  if (nameList.includes(name)) {
    return `${name} has been found and its position is ${nameList.indexOf(
      name
    )}`;
  } else return "Name not found";
}

console.log(nameFinder(names, "Clint"));

//No he terminado de encontrar la forma de sacar el true por consola junto con la posicion, tambien es cierto que pienso que si devuelve la posicion es porque es true ya que si ningun valor coincide, simplemente devolvera el mensaje "Name not found".

//No estoy del todo seguro si esta solucion es valida, dame todo el feedback posible, muchas gracias!!⭐
