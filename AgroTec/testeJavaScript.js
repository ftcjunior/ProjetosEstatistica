

//Teste de switch para utilizar no estudo de probabilidade
const junior = 6
let idade = 52
switch(junior){
    case 3:
        console.log('valor teste é verdadeiro')
    break;
    case 5:
        console.log(`${idade} é verdadeiro`)
    break;

    default:
        console.log('valor pacrão do switch JUNIOR TARGINO PROGRAMADOR FULL STACK')
    break;


}
//parâmetros para a função 
function testeProb(valor1,valor2,valor3){
    let total = valor1 + valor2*(valor1+valor3)
    console.log(total)
}
//teste para usar push e pull
testeProb(3,4.9,22)

//Mudanças feitas para Teste de controle de Versão 1971 1985
//funçao seta
const num3 = 34.8
const frutas = (a,b,c)=>{ 

let valor =  a*13.54/(b-c)

console.log(valor.toFixed(2))

}


let mudar =   Number(frutas(12,87,35))
