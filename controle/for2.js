
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (const key in notas) {
    if (notas.hasOwnProperty(key)) {
        const element = notas[key];
        console.log(`nota = ${element}`);
    }
}

const pessoa ={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 50
}

for (const key in pessoa) {
  console.log(`${key} =  ${pessoa[key]}`);
  
}