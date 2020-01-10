const pessoa  = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 123
    }
}
// tire nome e idade do objeto pessoa
const {nome, idade} = pessoa

console.log(nome, idade);

const {nome: n, idade: i} = pessoa

console.log(n, i);

const {sobrenome, bemHumorado = true} = pessoa

console.log(sobrenome, bemHumorado);

const{endereco: {logradouro, numero, cep}} = pessoa

const {conta: {ag, num}} = pessoa
console.log(ag, num)


