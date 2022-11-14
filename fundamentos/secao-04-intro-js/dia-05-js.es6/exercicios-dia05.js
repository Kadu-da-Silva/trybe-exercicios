// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;

// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).

// Bônus (opcional): tente fazer o mesmo exercício utilizando 'ternary operator'
//O operador ternário é um operador condicional simplificado como if/ else.

// Sintaxe:condition ? <expression if true> : <expression if false></expression>

let status = 'off'

//solução com ternary operator
const onOff = () => (
    status === 'off' ? status = 'on' : status = 'off'
)

console.log(`O motor está ${onOff()}`);
console.log(`O motor está ${onOff()}`);
console.log(`O motor está ${onOff()}`);

//solução com if
let status = 'desligado';

const ligarDesligar = () => {
  if (status === 'desligado') {
    return status = 'ligado';
  } else {
    return status = 'desligado';
  }
}

console.log(`O motor está ${ligarDesligar()}`); //  O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado



//Crie uma função que calcule a área de um círculo.

// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

// Com base nessa informação:

// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

// Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

// Crie a lógica para retornar a área do círculo;

// Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).


const circleArea = (radius) => {
    const pi = 3.14;

    let area = pi * radius * radius;

    return console.log(`Essa é a área do círculo: ${area}`);
}

circleArea(3);
circleArea(5);



//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

const longestWord = (text) => {

}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

//Transforme a string recebida por parâmetro em um array através do método split.
//split:
//O split()método divide uma string em uma matriz de substrings

//O sort()método classifica um array em ordem alfabética

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

  //Longestword com sort em uma linha
  const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));