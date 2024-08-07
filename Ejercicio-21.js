/*const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (const user of users) {
  if (user.years >= 18) {
    console.log(`Usuarios mayores de edad: ${user.name}`);
  } else if (user.years < 18)
    console.log(`Usuarios menores de edad: ${user.name}`);
}*/

//

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const underAge = [];
const ofAge = [];

for (const user of users) {
  if (user.years >= 18) {
    ofAge.push(user.name);
  } else if (user.years < 18) underAge.push(user.name);
}

console.log(
  `Usuarios mayores de edad: ${ofAge}, Usuarios menores de edad: ${underAge}`
);
