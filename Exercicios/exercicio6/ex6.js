let numero = prompt('Digite um número: ');
document.querySelector("h1").innerHTML = (`Seu número é: ${numero}`);

numero = Number(numero);

let raizQuadrada = Math.sqrt(numero);
document.body.innerHTML += (`Raiz quadrada: ${raizQuadrada}  <br/><br/>`);

let inteiro = Number.isInteger(Math.round(numero));
document.body.innerHTML += (`${numero} é inteiro: ${inteiro} <br/><br/>`);

let nan = isNaN(numero);
document.body.innerHTML += (`É NaN: ${nan} <br/><br/>`);

let arreBaixo = Math.floor(numero);
document.body.innerHTML += (`Arredondando para baixo: ${arreBaixo} <br/><br/>`);

let arreCima = Math.ceil(numero);
document.body.innerHTML += (`Arredondando para cima: ${arreCima} <br/><br/>`);

let duasDecimais = numero.toFixed(2);
document.body.innerHTML += (`Com duas casas decimais: ${duasDecimais} <br/><br/>`);