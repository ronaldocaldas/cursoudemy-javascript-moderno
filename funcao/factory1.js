const prod1 = {
    nome: 'Nome',
    preco: 45
}



// factory simples
function criarPessoa() {
    return {
        nome: 'ana',
        sobrenome: 'silva'
    }
}

console.log(criarPessoa());
