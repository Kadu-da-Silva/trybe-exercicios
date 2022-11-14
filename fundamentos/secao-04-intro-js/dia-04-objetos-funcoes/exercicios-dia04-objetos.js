let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave
  // Aqui temos dois jeitos de acessar a chave personagem

console.log('Bem-vinda, '+ info.personagem);

// ou

console.log('Bem-vinda, '+ info['personagem']);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor
//Primeiro passo: Acesse a chave recorrente e atribua a ela o valor ‘Sim’.
// Duas formas de acessar a chave recorrente

info.recorrente = 'Sim';

// Ou

info['recorrente'] = 'Sim';

//Segundo passo: Imprima no terminal o objeto info utilizando a função console.log.
info['recorrente'] = 'Sim';

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto.
//Primeiro passo: Defina o for/in que deve percorrer cada propriedade do objeto info.
for(let properties in info) {}

//Segundo passo: A cada loop, o for/in deve imprimir uma propriedade do objeto info com a função console.log
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  for(let properties in info) {
    console.log(properties);
  }

  //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
  //Primeiro passo: Defina o for/in que deve percorrer cada propriedade do objeto info
  for(let properties in info) {}

  //Segundo passo: A cada loop, o for/in deve imprimir o valor que está em uma chave do objeto info com a função console.log.
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  for(let properties in info) {
    console.log(info[properties]);
  }

  //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. 
  //Primeiro passo: Defina o objeto info2 com a mesma estrutura do objeto info porém com os valores pedidos no enunciado.
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  //Segundo passo: Defina o for/in que deve percorrer cada propriedade do objeto info.
  for (let properties in info) {}

  //Terceiro passo: Utilize if/else para fazer uma condicional que deve testar, quando properties for recorrente, se os valores dos objetos são Sim. Caso sejam, imprima no terminal “Ambos recorrentes”. Caso a condicional seja falsa, imprima no terminal as informações dos objetos agrupadas por um e.
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }

  //Usando o objeto abaixo
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  //Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
  // Duas formas de acessar as chaves dos objetos
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// ou

console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
//Como a chave livrosFavoritos do objeto leitor é um array, devemos adicionar o novo objeto utilizando o método push, passando como parâmetro o objeto a ser inserido.
leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  );

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.
//Para conseguir determinar a quantidade de objetos salvos no array livrosFavoritos utilizaremos o método length.
// Duas formas de acessar a chave "livrosFavoritos"
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

// ou

console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');