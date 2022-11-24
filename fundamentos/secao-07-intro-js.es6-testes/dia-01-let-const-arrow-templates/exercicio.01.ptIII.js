const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNewKey = (obj, key, value) => {
    obj[key] = value;
    // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);


//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) =>  Object.keys(obj);
// O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.

console.log(listKeys(lesson1));


//Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) =>  Object.keys(obj).length;
// Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
console.log(sizeObj(lesson1));


//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) =>  Object.values(obj);
// Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()"

console.log(listValues(lesson1));


//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// O método "Object.assign()" recebe dois parâmetros, um objeto, e o que queremos atribuir à ele. Se no primeiro parâmetro passarmos um objeto vazio ele criará um objeto novo com as caraterísticas do segundo parâmetro.

console.log(allLessons);


//Crie uma função que retorne o número total de estudantes em todas as aulas.

//Primeiro passo: Crie a função getNumberOfStudents, que recebe um objeto por parâmetro.

const getNumberOfStudents = (obj) => {
    // essa será a função responsável pela lógica e ela receberá um objeto como parâmetro.
  };
  console.log(getNumberOfStudents(allLessons));

//Segundo passo: Crie uma variável para armazenar o total de estudantes.

const getNumberOfStudents = (obj) => {
    let total = 0; // começamos a contagem de alunos com 0;
  };
  console.log(getNumberOfStudents(allLessons));

//Terceiro passo: Recupere as chaves do objeto passado por parâmetro.

const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const keys = Object.keys(obj); // pegamos as chaves do objeto;
  };
  console.log(getNumberOfStudents(allLessons));

//Quarto passo: Crie uma estrutura de repetição para iterar sobre o array de chaves.

const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const keys = Object.keys(obj);
      
    for (index in keys) { // for in para iterar sobre o array de chaves
    }
  };
  console.log(getNumberOfStudents(allLessons));

//Quinto passo: A cada repetição do for/in, incremente a variável total
  //Acesse o objeto passado por parâmetro através da sintaxe obj[keys[index]];
  //Após acessar o objeto, acesse a chave numeroEstudantes;
  //Utilize esse valor para incrementar a variável total.

const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const keys = Object.keys(obj);
      
    for (index in keys) {
      total += obj[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
    }
    return total;
    // a função retorna o total de alunos após as iterações do "for/in"
  };
  console.log(getNumberOfStudents(allLessons));

  //Sexto passo: Retorne a variável total.

  const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const keys = Object.keys(obj);
      
    for (index in keys) {
      total += obj[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
    }
    return total; // a função retorna o total de alunos após as iterações do "for/in"
  };
  console.log(getNumberOfStudents(allLessons));


//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 2));


//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.

//Primeiro passo: Crie a função verifyPair, que irá receber por parâmetro:
    //O objeto;
    //O nome da chave;
    //O valor a ser comparado.

    const verifyPair = (obj, key, value) => {
    };
    console.log(verifyPair(lesson2,'professor','Carlos'));

//Segundo passo: Armazene as entradas do objeto em uma variável através do método Object.entries.

const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

//Terceiro passo: Crie uma variável que irá armazenar se o par (chave/valor) passado por parâmetro existe no objeto.
    //Defina o valor inicial dessa variável como false.

    const verifyPair = (obj, key, value) => {
        const entries = Object.entries(obj);
        let isEqual = false;
      };
      console.log(verifyPair(lesson2,'professor','Carlos'));   

//Quarto passo: Utilize o for/in para iterar sobre a variável entries.

const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

//Quinto passo: Se o par (chave/valor) passado por parâmetro existir no objeto, altere o valor da variável isEqual para true.
    //Retorne a variável isEqual

    const verifyPair = (obj, key, value) => {
        const entries = Object.entries(obj);
        let isEqual = false;
        for (let index in entries) {
          if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
        }
        return isEqual;
      };
      console.log(verifyPair(lesson2,'professor','Carlos'));

