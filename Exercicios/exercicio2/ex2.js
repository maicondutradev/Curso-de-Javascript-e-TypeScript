const nome = 'Maicon';
const sobrenome = 'Fonseca Dutra';
const idade = 23;
const peso = 80;
const alturaEmM = 1.76;

let Imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;

console.log(`${nome} ${sobrenome}tem ${idade} anos, pesa ${peso}KG, tem ${alturaEmM} de altura e seu IMC é de ${Imc}`)
