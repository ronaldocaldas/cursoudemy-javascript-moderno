function tratarErroELancar(error) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) {
        tratarErroELancar(error)
    } finally{
        console.log('Final');
        
    }
}

const obj = { name: 'Roberto' }

imprimirNomeGritado(obj)