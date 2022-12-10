//Organizando uma biblioteca
//Estes exercícios praticam os conceitos de Higher Order Functions associados a outros temas de fundamentos já vistos, como arrow functions, template literals e objetos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((books) => books.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());
//Podemos utilizar o método find sobre o array books, e para cada livro verificamos se o ano de nascimento da pessoa autora é 1947. A HOF irá encerrar o ciclo assim que achar o primeiro caso de sucesso e retorná-lo.


//Retorne o nome do livro com menor número de caracteres (menor nome).
//Primeiro passo: Declare a variável nameBook sem nenhum valor.
//Segundo passo: Aplique a condicional if utilizando operadores lógicos.
    //O primeiro operador é o not (!) antes de nameBook. Fazemos isso porque, como a variável nameBook não guarda nenhum valor, ela retorna undefined por padrão, e consequentemente o JavaScript a interpreta como um valor falsy, que se traduz como false. Desta maneira, ao utilizar o operador not (!) antes de nameBook, você nega que ele seja falso, ou seja, converte-o para true.
//Terceiro passo: Utilize o operador or (||) para compor a lógica de nameBook.
    //Se nameBook retornar true ou se o tamanho da string contida na chave name de cada objeto em books for menor que o tamanho de nameBook, a função deverá guardar o nome desse livro em nameBook;
const expectedResult2 = 'Duna';
const smallerName = () => {
    let nameBook;
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });
    return nameBook;
  }
console.log(smallerName());
//Dessa forma, na primeira iteração, como nameBook é undefined, ou seja, não guarda o nome de nenhum livro, o primeiro nome de livro será guardado em nameBook. A partir da segunda iteração, é feita a comparação, e se o nome do livro for menor que o que está guardado em nameBook, este irá tomar seu lugar. Esse processo se repete até a última iteração.


//Encontre o primeiro livro cujo nome possua 26 caracteres.
const expectedResult3 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  const getNamedBook = () => {
    return books.find((books) => books.name.length === 26)
  }
console.log(getNamedBook());


//Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
const expectedResult4 = false;

function everyoneWasBornOnSecXX() {
  return Object.values(books).every((books) => books.author.birthYear > 1900 && books.author.birthYear < 2001)
;}
console.log(everyoneWasBornOnSecXX());


//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResult5 = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((books) => books.releaseYear >= 1980 && books.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s());


//Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
//Primeiro Passo

// Primeiro vamos entender que precisamos de dois métodos aqui. O primeiro vai iterar sobre o array books e irá comparar cada livro do array com os demais, porém para fazer essa comparação a cada outro livro precisaremos de um outro método iterando sobre o array.

// O segundo método carregará a lógica, e então irá verificar se existe ao menos um caso em que a idade seja igual. Esse segundo método será um every, pois como ele fará o mesmo loop para cada livro, todos os resultados devem retornar o mesmo.

//Segundo Passo

// Implementamos a nossa lógica do some. Aqui veremos se o birthYear é o mesmo.

//Terceiro Passo

// Como estamos iterando duas vezes sobre o mesmo array, acaba acontecendo que comparamos o mesmo índice do array. Outra coisa que pode acontecer também é termos o mesmo autor para dois livros diferentes. Vamos então criar uma regra para que o nome do autor não possa ser igual nas comparações.

// Quarto Passo

// Quase lá, a única coisa que faltou é que nossa lógica está invertida. Devemos retornar true caso NENHUM autor tenha nascido no mesmo ano. Podemos utilizar o ! que inverterá o valor retornado do nosso método some.
const expectedResult6 = false;

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}