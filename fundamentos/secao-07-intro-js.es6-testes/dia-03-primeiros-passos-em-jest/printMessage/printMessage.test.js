// printMessageTest.test.js
const { info } = require('./printMessage.js');

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
})