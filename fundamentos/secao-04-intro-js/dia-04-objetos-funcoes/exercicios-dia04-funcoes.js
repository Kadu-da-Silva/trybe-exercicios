//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//Primeiro passo: Defina a função recebendo como parâmetro uma string
function verificaPalindrome(word) {}

//Segundo passo: Uma maneira de resolver o exercício é utilizando um loop. Como podemos acessar a posição de uma string da mesma forma que acessamos um array, faça um loop para percorrer cada posição do array.
function verificaPalindrome(word) {
    for(index in word) {}
  }

  //Terceiro passo: Compare o caractere da posição index do loop com o caractere da última posição (length - 1) menos o valor do index. Dessa forma você conseguirá verificar se a sequência de caracteres na string é a mesma do início ao fim e do fim ao início
  function verificaPalindrome(word) {
    for(index in word) {
      if(word[index] != word[(word.length - 1) - index]) {
        return false;
      }
    }
    return true;
  }

  //Quarto passo: Outra forma de resolver o exercício é utilizando os métodos split, reverse e join. Primeiro o método split transformará a string em um array onde cada posição será uma letra da string. Depois o método reverse fará o array ficar de trás pra frente. Em seguida o método join faz com que todo o array vire uma string novamente
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    
    return reverse
  }
  
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false

  //Quinto passo: Com a string invertida, criamos uma condicional que diz se essa nova string é igual a string passada como parâmetro. Assim, saberemos se a palavra é palíndroma ou não.
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false

  //Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
  //Array de teste: [2, 3, 6, 7, 10, 1];.
  
  //Valor esperado no retorno da função: 4.
  
  //Primeiro passo: Defina a função que receberá como parâmetro um array de números.
  //Segundo passo: Inicialmente o maior número deverá ser o do índice 0, e isso pode ser definido em uma variável auxiliar. Isso é feito pois, já que não analisamos os números ainda, por enquanto consideramos o primeiro como o maior.
  //Terceiro passo: Agora crie um loop for que irá percorrer cada posição do array recebido por parâmetro.
  //Quarto passo: Dentro do loop será feito uma condicional. Caso o valor do índice atual seja maior do que o maior número, a variável indiceMaior deve receber o valor do novo índice.
  function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
  
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4
  
  //Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

//Valor esperado no retorno da função: Fernanda

//Primeiro passo: Defina a função que receberá como parâmetro um array de nomes.
//Segundo passo: Inicialmente o nome com mais caracteres deverá ser o do índice 0, e isso deve ser definido em uma variável auxiliar. Isso é feito pois, já que não analisamos as palavras ainda, por enquanto consideramos a primeira como a maior.
//Terceiro passo: Agora crie um loop for que irá percorrer cada posição do array recebido por parâmetro.
//Quarto passo: Dentro do loop será feito uma condicional. Caso o tamanho da palavra no índice atual seja maior do que a maior palavra, a variável maiorPalavra deve receber o valor do novo índice.
function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
  
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda


//rie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.

//Valor esperado no retorno da função: 2.

//Faremos um loop dentro do outro loop que irá percorrer o array, mas dessa vez ele irá ter uma condicional que irá contar quantas vezes o número da variável verificaNumero está se repetindo, e salvaremos a quantidade de repetições na variável contNumero. Repare que o nome da variável que serve para armazenar o índice muda no segundo loop, em razão de não conflitar com o índice do primeiro loop.
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) { // iterando por cada número no array de números
      let verificaNumero = numeros[index]; // armazenando esse número em uma variável auxiliar
      for (let index2 in numeros) { // iterando novamente por todos os números
        if (verificaNumero === numeros[index2]) { // se encontrou o número do loop de fora
          contNumero += 1; // incrementa o numero de vezes que esse número aparece
        }
      }
    }
  }

  //e o valor de contNumero for maior do que contRepetido isso significa que esse número da atual iteração é o que mais se repete até então, logo:

// contRepetido receberá o valor de contNumero;
// indexNumeroRepetido receberá o valor de index.
// No final o valor de contNumero deve ser reiniciado para 0 (zero) a fim de que o loop continue checando os próximos valores do array.
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
  
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
  
    return numeros[indexNumeroRepetido];
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

  //Uma outra forma de resolver o exercício é utilizando objetos. Iniciamos com um objeto vazio e criamos um loop para adicionar as chaves. Aqui a chave recebe o nome do número no array, e o valor inicial de 1. Caso o loop passe pelo mesmo número, a chave irá incrementar seu valor em 1. Ou seja, o próprio objeto passa a ter o valor das repetições de cada número.
  function maisRepetido(numeros) {
    let num = {};
  
    for (let index = 0; index < numeros.length; index += 1) {
      let valor = numeros[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }}

    //Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.

//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

//Crie um loop que iniciará com o valor 1 e irá até o valor da variável numero recebida por parâmetro. A cada loop, o valor de total será somado com o valor do index do loop.
function somaTodosNumeros(numero) {
    let total = 0;
  
    for (let index = 1; index <= numeros; index += 1) {
      total = total + index;
    }
    return total;
  }
  
  console.log(somaTodosNumeros(5)); //15

  //Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false
//-------------------------------------------------------------------------------//
//Utilize o método split para transformar as strings em arrays com cada posição sendo uma letra da string.
//Defina uma variável auxiliar de controle que receberá o valor booleano true inicialmente. Essa variável será o retorno de nossa função e indicará se a string fimPalavra é realmente o fim da string palavra.
//Crie um loop que deverá percorrer todas as posições de palavra.
//Dentro do loop faça uma condicional. Compare o valor de fimPalavra[index] com onde esse valor deveria estar em palavra. Se esse valor não estiver na posição que deveria estar em palavra, controle deve receber false. Por fim, retorne controle.
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    let controle = true;
  
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
  
    return controle;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); //true
  console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

  //outra forma

  //Uma outra forma de fazer esse exercício é transformar as strings em arrays com o método split e depois revertê-los com o método reverse. Assim, comparamos em um loop cada posição dos dois arrays e caso alguma seja diferente, retornamos false.
  function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        result = false;
        break;
        break; // O "break" serve para encerrar o loop.
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); //true
  console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

