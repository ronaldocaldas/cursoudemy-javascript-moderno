// tagged tample - processa o template dentro  uma função 
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outras string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag`${aluno} está ${situacao}.`);
