//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

//Uma string é um array de caracteres, então cada elemento do array é uma letra.
//O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

//criar um objeto que associe cada letra a um numeral para fácil consulta
const numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

//Segundo passo: Defina a função que receberá uma string de algarismo romano como parâmetro.
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
//};

function romanoParaDecimal(numero) {}

//Terceiro passo: Use o método toLowerCase para deixar todos os caracteres minúsculos e assim conseguir achá-los em nosso objeto numerosRomanos.
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
// };

// function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    // }

//Quarto passo: Crie uma variável para receber o tamanho do número recebido por parâmetro.
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
// };

// function romanoParaDecimal(numero) {
//  numero = numero.toLowerCase();
  const len = numero.length;
  // }

//Quinto passo: Crie uma variável que receberá o valor final da função. Ela deve iniciar com o valor do último algarismo romano.
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
let soma = numerosRomanos[numero[len - 1]];
// }

//Sexto passo: Crie uma variável que irá nos auxiliar no loop. Ela deve iniciar com o valor do último algarismo romano.
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
let atual = numerosRomanos[numero[len - 1]];
// }

//Sétimo passo: Faça um loop que inicie com o número 2 e vá até o número da variável len
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
//   let atual = numerosRomanos[numero[len - 1]];

for (let i = 2; i <= len; i += 1) {}
// }

//Oitavo passo: Dentro do loop, faça uma variável que armazenará o valor anterior a variável atual.
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
//   let atual = numerosRomanos[numero[len - 1]];

// for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];
    // }
    // }

//Nono passo: Dentro do loop, faça uma condicional. Caso atual seja menor ou igual a prox, soma deve somar seu valor com prox. Caso contrário, soma deve subtrair com prox
// const numerosRomanos = {
//  i: 1,
//  v: 5,
//  x: 10,
//  l: 50,
//  c: 100,
//  d: 500,
//  m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
//   let atual = numerosRomanos[numero[len - 1]];

// for (let i = 2; i <= len; i += 1) {
//   const prox = numerosRomanos[numero[len - i]];

if (atual <= prox) {
    soma += prox;
  } else {
    soma -= prox;
  }
// }
// }

//Décimo passo: Por fim, atual deve receber o valor de prox para que o loop continue. Quando o loop terminar, retorne soma. Se seu código estiver correto, ele deve parecer assim no final:
const numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    const len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];
  
    for (let i = 2; i <= len; i += 1) {
      const prox = numerosRomanos[numero[len - i]];
  
      if (atual <= prox) {
        soma += prox;
      } else {
        soma -= prox;
      }
  
      atual = prox;
    }
  
    return soma;
  }
  
  console.log(romanoParaDecimal('MMXVIII')); // 2018
  console.log(romanoParaDecimal('VI')); // 6
  console.log(romanoParaDecimal('IV')); // 4

  

//Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

//Crie um loop for que deverá ir do número 0 até o tamanho do array recebido por parâmetro.

// Crie uma variável auxiliar que receberá o valor do array na posição index de vector.

//Crie outro loop para percorrer o array numbers

//Crie uma variável auxiliar dentro do segundo loop para receber o valor do array numbers que está na posição indexSub.

//Por fim, testamos se current é par ou ímpar e o adicionamos ao array result caso seja par. 

const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  const result = [];

  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];

      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }

  return result;
}

console.log(arrayOfNumbers(vector));
console.log(arrayOfNumbers(vector)); // [2, 4, 6, 8, 10]



//A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  //Primeiro passo: Crie um objeto vazio
  const result = {};

  //Segundo passo: Crie um loop que deve percorrer o array basket
  for (let index = 0; index < basket.length; index += 1) {}

  //Terceiro passo: Dentro do loop deve existir uma variável que possui o valor da fruta naquela posição.
  for (let index = 0; index < basket.length; index += 1) {
    const fruit = basket[index];
  }

  //Quarto passo: Faça uma condicional que testará se o objeto result possui uma propriedade com o valor de fruit. Caso não possua, cria essa propriedade com o valor 0. Se já possuir, será incrementado 1 ao seu valor.
  for (let index = 0; index < basket.length; index += 1) {
    const fruit = basket[index];
    if (!result[fruit]) result[fruit] = 0;
    result[fruit] += 1;
  }

  //Quinto passo: Crie uma variável que receba um array vazio.
  const summaries = [];

  //Sexto passo: Crie um loop for/in para percorrer cada propriedade de result.
  for (fruit in result) {}

  //Sétimo passo: Dentro do loop será criada uma mensagem com a quantidade e o nome da fruta. Caso a quantidade seja maior que 1, crie uma condicional para adicionar um “s” ao final da frase.
  const summaries = [];
for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
}

  //Oitavo passo: Por fim, adicione a mensagem ao array summaries e imprima com um console.log a mensagem esperada no enunciado. 
  const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  
  const result = {};
  
  for (let index = 0; index < basket.length; index += 1) {
    const fruit = basket[index];
    if (!result[fruit]) result[fruit] = 0;
    result[fruit] += 1;
  }
  
  const summaries = [];
  
  for (fruit in result) {
    let message = `${result[fruit]} ${fruit}`;
    if (result[fruit] > 1) message += 's';
    summaries.push(message);
  }
  
  console.log(`Sua cesta possui: ${summaries.join(', ')}.`);




  //Usando o objeto abaixo
  let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  //Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

//Primeiro passo: Crie uma variável que receberá todos os moradores do bloco 2.

//Segundo passo: Crie uma variável que receberá o último morador do bloco 2.

//Terceiro passo: Utilize o console.log para concatenar as informações da maneira que o enunciado pede. Seu código deve ser assim quando terminar:
let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// Duas formas de acessar as propriedades do objeto "ultimoMoradorBlocoDois"
console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

// Ou

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);

//Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

//Primeiro passo: Crie um loop que percorra todo o array moradores.blocoUm. A cada loop, será impresso o nome e o sobrenome do morador.

//Segundo passo: Crie um loop que percorra todo o array moradores.blocoDois. A cada loop, será impresso o nome e o sobrenome do morador. 

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
  }
  
  for (let index = 0; index < moradores.blocoDois.length; index++) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
  }