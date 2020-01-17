// pessoa -> 123 -> {...}
const pessoa = {nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa);

//pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}
//console.log(pessoa);
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua Abc'
delete pessoa.nome
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'José'})
pessoaConstante.nome = 'Joaquim'
console.log(pessoaConstante);
