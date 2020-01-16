const fabricatntes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricatntes.forEach(imprimir);

fabricatntes.forEach(function (fabricante) {
    console.log(fabricante);
})

fabricatntes.forEach(fabricante => console.log(fabricante))