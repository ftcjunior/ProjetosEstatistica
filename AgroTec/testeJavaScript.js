

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
const frutas = (a,b,c)=>{ a*0.54*(b-c)}



