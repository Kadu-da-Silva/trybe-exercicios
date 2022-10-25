const n1=8
const n2=6
const n3=6

if ((n1*n2*n3)%2==0) {
    console.log('True');
} else {
    console.log('False');
}       

if ((n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0)) {
  console.log('True');
}else{
    console.log('False');
}

//Produtos

const custoProduto=8.99; //1
const quantidadeVendida=1000; //2
const valorVenda=(0.6 * custoProduto) + custoProduto; //3
const totalVenda=quantidadeVendida*valorVenda; //4
const impostoSobreVenda=(0.2 * valorVenda); //5
const impostoTotal=impostoSobreVenda*quantidadeVendida; //6
const custo_total=custoProduto*quantidadeVendida+impostoTotal //7
const lucro=totalVenda-custo_total //8

console.log('1', custoProduto);
console.log('2', quantidadeVendida);
console.log('3', valorVenda);
console.log('4', totalVenda);
console.log('5', impostoSobreVenda);
console.log('6', impostoTotal);
console.log('7', custo_total);
console.log('8', lucro);

// Salário

/*INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
*/

let salario=3000
let inss=undefined;

if (salario<=1556.94){
    console.log('INSS = 8%')
    inss=salario*0.08
} else if (salario<=2594.92){
    console.log('INSS = 9%')
    inss=salario*0.09
} else if (salario<=5189.82){
    console.log('INSS = 11%')
    inss=salario * 0.11
} else if (salario>5189.82){
    console.log('INSS alíquota máxima de R$ 578,88')
    inss= 570.88
}

let salarioComInss=(salario-inss)
let ir=undefined;

if (salarioComInss <= 1903.98) {
    console.log('Isento de imposto de renda');
    ir=0
} else if (salarioComInss <= 2826.65){
    console.log('Alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto');
    ir=0.075*salarioComInss - 142.80
} else if (salarioComInss <= 3751.05){
    console.log('Alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto');
    ir=0.15*salarioComInss - 354.80
} else if (salarioComInss <= 4664.68){
    console.log('Alíquota de 22,5% e parcela de R$ 636,36 a deduzir do imposto');
    ir=0.225*salarioComInss - 636.36
} else if (salarioComInss > 4664.68){
    console.log('Alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto');
    ir=0.275*salarioComInss - 869.36
}

console.log('Salário líquido =', salario-inss-ir)