let a = 3

global.b = 123
this.c = 456
this.d = false
this.e  = 'teste'

console.log(this.a);
console.log(global.b);
console.log(this.c);
console.log(this.d);
console.log(this.e);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// Criando uma variavel maluca: sem var e let!
abc = 3 // não faça isso em casa!!!

console.log(global.abc);





this.c = 4