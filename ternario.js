const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1));
console.log(resultado(6.7));

const status = nota => { 
  return  nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(status(9));
