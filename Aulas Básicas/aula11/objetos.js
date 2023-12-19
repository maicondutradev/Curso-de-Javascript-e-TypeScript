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
console.log(pessoa2);
console.log(pessoa3);












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