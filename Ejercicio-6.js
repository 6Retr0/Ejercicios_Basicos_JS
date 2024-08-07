// 6.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// 6.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 6.3 Crea un bucle para conseguir dormir contando ovejas.
for (let i = 1; i <= 10; i++) {
  if (i <= 9) {
    console.log("Intentando dormir 🐑");
  } else if (i == 10) {
    console.log("¡Dormido!");
  }
}
