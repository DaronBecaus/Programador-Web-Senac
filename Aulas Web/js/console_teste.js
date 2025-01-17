var nome = window.prompt("Qual seu nome?");
console.log("Prazer, " + nome);
console.log(`Prazer, ${nome}`);

var numero = 0; //tipo número
var num = "0"; //tipo string
console.log(numero == num); //compara valores
console.log(numero === num); //compara valores e tipos

var idade = window.prompt("Qual é sua idade?");

if (idade >= 18) {
  console.log("Você é maior de idade, já pode ser preso");
}

var idade = window.prompt("Qual é sua idade?");

if (idade >= 18 && idade < 70) {
  console.log("Seu voto é obrigatório");
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
  console.log("Seu voto é opcional");
} else {
  console.log("Você não pode votar ainda!");
}

let favoriteColor = "red";

switch (favoriteColor) {
  case "red":
    console.log("Your favorite color is red");
    break;
  case "green":
    console.log("Your favorite color is green");
    break;
  default:
    console.log("Invalid Color");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let verdade = false;

while (verdade < 10) {
  console.log("Oi");
  verdade++;
}

function soma(a, b) {
  console.log(`A soma de ${a} + ${b} é: ${a + b}`);
}

soma(2, 3);
soma(10, 11);
soma(9.5, 7.2);

function digaOi() {
  console.log("Oi");
}

digaOi();

function multiplica(x, y) {
  return x * y;
}

let valor = multiplica(2, 4);
console.log(valor);

// algumas funções internas de js para manipular Strings
let nome = "fellies";
console.log(nome.toLocaleUpperCase()); //todas maiúsculas, função oposta = toLowerCase()
console.log(nome.length); //comprimento da string (também usada em arrays)
console.log(nome.slice(0, 2)); //recorte
console.log(nome[0]); //retorna o valor pela posição (usada em arrays, strings são tratadas como arrays)

let frase = "Hello World";
console.log(frase.replace("World", "peoples")); //substitui uma string por outra

let numero = "10";
let valor1 = 12;
let preco = 13.343535;

console.log(typeof numero); //função geral para verificar o tipo de uma variável
console.log(valor1.toString()); //converte o valor de uma variável para tipo string
console.log(preco.toFixed(2)); //exibe até uma quantidade definida de casas decimais
console.log(numero.valueOf()); //retornar (se possível) o valor numérico em uma string NaN
console.log(Number(numero)); //converte um tipo string (se possível) em um tipo Number

//arrays
const carros = ["fusca", "bmw", "corolla"]; //criando um array
//ou
const frutas = new Array("maça", "laranja", "banana");
const teste = new Array(1, 4, 100); //array com valores (tres elementos para uma lista)
const teste1 = new Array(100); //uma lista com cem elemento ainda por definir
console.log(carros[0]); //acessando elementos do array (indices começam em 0)
carros[0] = "marea"; //mudando valores
console.log(carros[0]);

frutas.push("limão"); //adiciona novo elemento em frutas
console.log(frutas);

frutas.pop(); //remove o ultimo elemento
console.log(frutas);

console.log(carros.length); //tamanho do array
console.log(carros.sort()); //ordena o array

for (let i = 0; i < frutas.length; i++) {
  //exibindo os elementos or linha
  console.log(frutas[i]);
}
//ou
frutas.forEach((element) => {
  console.log(element);
});

//executa algo em determinado tempo (em milissegundos)
//setInterval (função call-back, tempo)
//neste exemplo crio um 'arrow function'

setInterval(() => {
  console.log("Essa mensagem aparece a cada 2 segundos");
}, 2000);

//neste exemplo crio uma função normal

function msg() {
  console.log("Essa mensagem aparece a cada 2 segundos");
}
setInterval(msg, 2000);

//nesse exemplo crio uma função anonima

setInterval(function () {
  console.log("Essa mensagem aparece a cada 2 segundos");
}, 2000);

const pessoa = { nome: "José", sobrenome: "Sousa", idade: 49 }; //array associativo "chave:valor"
console.log(pessoa.nome);
