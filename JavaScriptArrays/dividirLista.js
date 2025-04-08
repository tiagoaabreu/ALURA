const listaEstudantes = [
  "João",
  "Maria",
  "José",
  "Ana",
  "Pedro",
  "Lucas",
  "Carla",
  "matheus",
  "barbara",
  "tiago",
  "Carolina",
  "Carlos",
];

const sala0 = listaEstudantes.slice(0, 6); // Didivir de forma flat(definindo os valores de forma estatica)
const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);

console.log(sala1);

const sala01 = listaEstudantes.slice(6);
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2); //Didivir de forma dinamica

console.log(sala2);
