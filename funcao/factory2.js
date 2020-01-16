// factory simples
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.0));
console.log(criarProduto('Ipad', 1999.0));