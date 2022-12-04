//As funções some e every são parecidas e retornam valores booleanos.

//A função some retorna true se ao menos um elemento de um array satisfaz a uma condição. Já o every retorna true se todos os elementos de um array satisfazem a uma condição.

//Array.some
//Imagine que você esteja responsável por criar um sistema de acesso para as pessoas colaboradas da empresa em que você trabalha. Para isso, precisa verificar se pelo menos uma dessas pessoas possui o cargo de gerência. Como você faria? 🤔

//Como você precisa descobrir se alguma das pessoas possui o cargo de gerência e não precisa de mais detalhes sobre essa pessoa, você pode utilizar o some, que vai retornar true caso encontre alguém com esse cargo, senão vai retornar false.

//As informações das pessoas estão dentro de um array de objetos conforme o exemplo abaixo:

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
  
  console.log(verificaCargo); // true
//No código acima, é verificado se dentro do array de pessoas existe alguém que possua o cargo de 'Gerência'. O retorno foi true porque existe pelo menos uma pessoa com esse cargo.

//Agora imagine que você precise verificar se existe algum nome que comece com a letra desejada. Analise e execute o código abaixo:
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false
//O código acima mostra a função verifyFirstLetter, que recebe como primeiro parâmetro letter, que é a letra desejada, e como segundo parâmetro o array chamado listNames.
//Dentro da função verifyFirstLetter, é executado o some para verificar se a primeira letra do nome atual (name[0]) da iteração é igual à letra desejada (letter).

//_________________________________________________________________________________________//

//Array.every
// Imagine que você pegou um boletim escolar antigo e quer verificar se passou em todas as matérias. Como você faria? 🤔

// Ao utilizar a função every, você consegue resolver esse problema. Caso tenha passado em todas as matérias, o retorno será true; caso contrário, será false. Analise e execute o código abaixo:
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
  
  console.log(verifyGrades);

//A variável verifyGrades é responsável por salvar a lógica;

// Ao utilizar o Object.values, o retorno será um array com os valores das chaves do objeto grades como ['Aprovado', 'Reprovado', 'Aprovado'];

// Então o every executa a callback para cada um dos itens do array e verifica se todos eles possuem o texto 'Aprovado';

// O retorno é false, pois nem todos os valores das chaves do objeto grades são iguais a 'Aprovado'.

//De olho na dica 👀: para manter seu código conciso e evitar que erros aconteçam, você pode utilizar o método toLowerCase() para deixar todos os itens do array com letras minúsculas. Por exemplo: grade.toLowerCase() === 'aprovado'

//_______________________________________________________________________________________//

// Para fixar
// Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:

// O nome das pessoas convidadas está salvo em um array chamado names;

// A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).

// Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   arr.some((arr) => arr === name);
// };

const hasName = (array, name) => array.some((array) => array === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));


//Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

// Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

// Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, age) => Object.values(array).every((array) => array.age > age);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));