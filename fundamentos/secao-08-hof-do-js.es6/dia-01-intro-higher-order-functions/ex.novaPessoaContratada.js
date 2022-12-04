// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.
// const newEmployees = () => {
//     const employees = {
//       id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//Primeiro passo: crie a função que recebe o nome e gera o email da pessoa contratada.
//Ao criar a função, você deve passar o nome completo por parâmetro e retornar um objeto que vai receber o nome completo e o email.

// Segundo passo: desenvolva a lógica do email.
// O email vai ser gerado a partir do nome passado por parâmetro.
// Ao criar um email, é importante deixá-lo padronizado com letras minúsculas e utilizar o underline(_) para separar o nome da pessoa. Para isso:
// utilize a função toLowerCase() para deixar as letras minúsculas:
// separe o nome utilizando o underline (_):
// O nome vem separado por espaços; você pode utilizar o replace para substituir os espaços por _.
// Observação 🔎: O replace não é a única maneira de substituir valores em uma string. Você pode utilizar outros métodos, como o split e o join, etc.
//retorne o email utilizando template literals.

//Terceiro passo: passe a função como parâmetro para cada id dentro de newEmployees.

  const newEmployees = (employeeGenerator) => {
    const employees = {
      id1: employeeGenerator('Pedro Guerra'),
      id2: employeeGenerator('Luiza Drumond'),
      id3: employeeGenerator('Carla Paiva')
    };
    return employees;
  };
  
  const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  console.log(newEmployees(employeeGenerator));