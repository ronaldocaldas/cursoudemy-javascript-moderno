let valor // não iniciada

console.log(valor);

valor = null // ausência de valor 
console.log(valor);
// console.log(valor.toString());
const produto = {}

console.log(produto.preco);
console.log(produto);
produto.preco = 3.50
console.log(produto);

produto.preco = undefined // eveite atribuir undefined

console.log(produto);
produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);

