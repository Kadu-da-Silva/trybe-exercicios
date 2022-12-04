// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

//Primeiro passo: Vamos criar uma callback que verifica se os números são os mesmos.

//Segundo passo: Vamos começar a trabalhar em nossa HOF, iniciando pelo gerador do número aleatório.

//Terceiro passo: Já temos o parâmetro number dentro do escopo da HOF, então vamos chamar nossa callback com esse valor. Precisamos só dizer à HOF que ela receberá por parâmetro nossa callback e o número escolhido.

//Quarto passo: Nossa função já retorna casos verdadeiros e falsos; vamos atribuir nossas mensagens a esses cenários e retorná-las.

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

//Se você por acaso não compreendeu a sintaxe com ? e :, não se preocupe. Esse tipo de validação é conhecido como “operador ternário” e é uma alternativa para se realizar uma validação if, else onde ? é equivalente ao if e : ao else. Dessa forma, o que está acontecendo é: O retorno da função numberChecker é verdadeiro ?. Se sim, retorne 'Lucky day, you won!', se não :, retorne 'Try Again!'.