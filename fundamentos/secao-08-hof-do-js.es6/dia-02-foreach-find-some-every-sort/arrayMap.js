//A função map possui a mesma estrutura que o forEach, o que muda é o seu retorno.
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
  

//Suponha que seja preciso transformar todos os números em negativo e passá-los para um array novo.
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]


//Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

//const listProducts = updateProducts(products, prices);
console.log(updateProducts(products, prices));
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]


//E, antes de seguir em diante, talvez você tenha se perguntado: Qual a diferença, afinal, de map para o forEach?

// As principais diferenças são:

// O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

// O forEach não tem retorno, ele é genérico e pode fazer diversas coisas, como executar uma função para cada elemento do array, modificar o array, atribuir valores a variáveis ou objetos, etc.




//Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
  ];

  //Com map e filter.
  const allNameStudents = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
  console.log(allNameStudents);
  //Saiba mais 💡: Você pode juntar duas HOFs para resolver o problema acima. Nesse caso, poderiam ser utilizadas as HOFs map e filter. O filter possui a mesma estrutura do forEach, map, entre outros, e é responsável por retornar um array filtrado de acordo com alguma condição. Então o map itera pelo array filtrado e retorna o nome e sobrenome da pessoa estudante. 

 //Agora vamos usar um map com um find.
 //Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
 const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  console.log(reportStatus('Jorge', estudantes));
  //O código teve uma redução drástica no número de linhas! Primeiro, fizemos um find para buscar e retornar os dados do estudante. O objeto foi retornado e salvo na variável studentsInfo, depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.
  