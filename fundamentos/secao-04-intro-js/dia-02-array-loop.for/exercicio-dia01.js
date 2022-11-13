let numbers = [5,9,3,19,70,8,100,2,35,27,127];

for (let index = 0; index < numbers.length; index++) {

    console.log(numbers[index]);
}

//somando os arrays
let result = 0;

for (let i = 0; i < numbers.length; i += 1){
    result += numbers[i]
}

console.log(result);

//calculando a média aritmétca
let average = 0;

for (let i = 0; i < numbers.length; i += 1){
    result += numbers[i]
    average = result/numbers.length
}

console.log(average);

//criando condição
if (average > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

//imprimindo o maior valor
let larger = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (larger < numbers[i]){
        larger = numbers[i]
    }
}

console.log(larger);

//imprimindo valores ímpares
let odd = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i]%2 != 0){
        odd += 1
    } else if (odd === 0){
        odd = 'nenhum valor ímpar encontrado'
    }
}

console.log(odd);

//imprimindo o menor valor
let smaller = numbers[0];

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < smaller){
        smaller = numbers[i]
    }
}

console.log(smaller);

//criar uma lista que vá de 1 até 25
let array = []

for (let i = 1; i <= 25; i += 1){
    array.push(i);
}

console.log(array);

//dividindo cada elemtento por 2 e imprimindo o resultado
for (let i = 0; i < array.length; i += 1){
    console.log(array[i] / 2)
}