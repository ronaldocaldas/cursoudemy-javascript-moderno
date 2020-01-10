// Armazenando uma função em uma váriavel 
const imprimirSoma = function (a, b ){
    console.log(a + b);
    
}

imprimirSoma(2, 3)

// Armazenamento uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b 
}
console.log(soma(2,3))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(5,2));
