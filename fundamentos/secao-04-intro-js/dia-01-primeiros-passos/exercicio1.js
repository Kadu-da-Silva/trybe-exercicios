let a=8;
let b=8;

console.log ('Adição =', (a + b));
console.log ('Subtração =', (a - b));
console.log ('Multiplicação =', a*b);
console.log ('Divisão =', a/b);
console.log ('Módulo =', a%b);

let n1=45
let n2=72

if (n1>n2) {
    console.log ('n1 é o maior número!')
} else {
    console.log('n2 é o maior número!')
}

let n3=903

if (n1>n2 && n1>n3) {
    console.log ('n1 é o maior número!')
} else if (n2>n1 && n2>n3){
    console.log('n2 é o maior número!')
} else {
    console.log ('n3 é o maior número!')
}

let number=-3

if (number>0) {
    console.log('O número ',number,' é Positivo')
} else if (number<0){
    console.log('O número',number,'é Negativo')
} else {
    console.log('O número ',number,' é Zero')
}

let angulo1=20
let angulo2=95
let angulo3=70

if (angulo1+angulo2+angulo3 === 180) {
    console.log('true');
} else if (angulo1+angulo2+angulo3 != 180) {
    console.log('false');
} else {
    console.log('erro');
}

let peça='Cavalo';

switch (peça.toLocaleLowerCase()) {
    case 'peão':
        console.log('movimento 1 casa à frente');
        break;

    case 'cavalo':
        console.log('movimento em L');
        break;
    
    case 'bispo': 
        console.log('movimento diagonal');
        break;

    case 'torre':
        console.log('movimentos horizontais e verticais');
        break;

    case 'rainha':
        console.log('movimento para qualquer direção');
        break;

    case 'rei':
        console.log('1 casa para qualquer direção');
        break;

    default:
        console.log('Isso não é peça de xadrez!');
}

let nota=100

if (nota>=90 && nota<=100) {
    console.log('A');
} else if (nota>=80 && nota<90){
    console.log('B');
} else if (nota>=70 && nota<80){
    console.log('C');
} else if (nota>=60 && nota<70){
    console.log('D');
} else if (nota>=50 && nota<60){
    console.log('E');
} else if (nota>=0 && nota<50){
    console.log('F');
} else {
    console.log('ERRO!');
}