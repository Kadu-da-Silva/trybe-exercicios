//A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada e retorne o primeiro valor do array que corresponda a essa condição. Caso ele não encontre, retorna undefined.

//Por exemplo, imagine que o time de pessoas desenvolvedoras com quem você trabalha resolveu fazer um desafio. Para isso, salvaram todas as idades das pessoas em um array, e você precisa descobrir se existem pessoas com menos de 20 e com mais de 50 anos.

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18
//No exemplo acima, o retorno foi 18. Isso acontece porque a primeira iteração do find acessa o primeiro item do array, que é o 18. Ao verificar se 18 é menor que 20, a resposta é true, e então o find retorna o número 18 e encerra a execução do código.

//Caso você realize uma verificação com o find que não encontre nenhum elemento, o retorno será undefined.


//Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const primos = numbers.find((numbers) => numbers%3 === 0 && numbers%5 === 0);

console.log(primos);

//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const letras = names.find((names) => names.length === 5);

console.log(letras);

//Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
const target = musicas.find((musicas) => musicas.id === '31031685');

console.log(target);