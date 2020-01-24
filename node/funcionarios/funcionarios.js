const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais == 'China'
const mulher = mulher => mulher.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios);

    //Mulher chinesa com menor salario
    const func = funcionarios
                .filter(chineses)
                .filter(mulher)
                .reduce(menorSalario)

    console.log(func);
    
})


