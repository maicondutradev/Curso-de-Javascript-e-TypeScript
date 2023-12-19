const pessoa1 = {
    nome: 'Maicon',
    sobrenome: 'Dutra',
    idade: 23,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();








////////////////////////////////////////////////////

/*
function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Maicon','Fonseca Dutra',23);
const pessoa2 = criaPessoa('Mirela','Taciane dos Santos', 22);
const pessoa3 = criaPessoa('Izabel', 'Cristina Lima da Fonseca', 45);

console.log(pessoa1);
console.log(pessoa2.nome);
console.log(pessoa3.idade);
*/

/////////////////////////////////////////////////////

/*
const pessoa1 = {
    nome: 'Maicon',
    sobrenome: 'Fonseca Dutra',
    idade: 23 
};

const pessoa2 = {
    nome: 'Mirela',
    sobrenome: 'Taciane dos Santos',
    idade: 22 
};

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
*/