//importe a função myRemove. Assim, poderemos utilizá-la nos nossos testes.

const myRemove = require('./myRemove.js');

//Comece dando uma descrição com describe.

const myRemove = require('./myRemove.js');

describe('testa a função myRemove', () => {
  it('deve retornar um array removendo o item correto', () => {});
});

//Importante lembrar que, para comparar objetos e arrays, devemos utilizar toEqual. Utilize o expect, que recebe como parâmetro a função myRemove, que por sua vez, recebe como parâmetro o array que o enunciado pede. Em seguida, use o toEqual com o valor de retorno que é esperado.

const myRemove = require('./myRemove.js');

describe('testa a função myRemove', () => {
  it('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});