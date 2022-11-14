// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
      if (fraseArray[index] === 'x') {
        fraseArray[index] = nome;
      }
    }  
    return fraseArray.join(' ');
  };
  
  console.log(substituaX('Carlos'));

  //Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string

  const minhasSkills = param => {
    const skill = ['Empatia',' Autoconfiança',' Liderança']
    let result = `${substituaX()} Minhas três principais habilidades são: ${skill}`
    return result;
  }

  console.log(minhasSkills(substituaX('Carlos')));