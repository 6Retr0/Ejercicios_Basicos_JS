const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (const values in alien) {
  console.log(`La propiedad ${values} tiene como valor ${alien[values]}`);
}
