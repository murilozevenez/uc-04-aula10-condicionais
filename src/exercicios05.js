// 1- Ler o valor do salário base
// 2- Ler o valor da gratificação
// 3- Preciso somar ambos os valores em uma variavel chamada salário bruto
// 4- Se o salário for menor que 1000, calcular o valor de IR sobre 15% do salário bruto
// 5- Senão, calcular o valor de IR sobre 20% do salário bruto
// 6- Calcular o salário liquido, que é a diferença entre o salário bruto e o IR
// 7- Imprimir o salário liquido

const readline = require("readline-sync")
 
const salario_base = readline.questionFloat("Informe seu salario base: ");
const gratificacao = readline.questionFloat("Informe sua gratificacao: ");
 
let salario_bruto = salario_base + gratificacao
 
if (salario_bruto < 1000){
    ir = salario_bruto * (15 / 100)
}else {
    ir = salario_bruto * (20/100)
}
let salario_liquido = salario_bruto - ir
 
console.log(salario_liquido);
