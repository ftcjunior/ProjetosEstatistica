

const carro = {
    cor: 'vermelho',
    marca: 'volks',
    modelo: 'zigzag',
    ano: 1996,
    placa: 586,
    dobrar: function(numero){
        if(numero == this.placa)
     return 'Dobrar a esquerda'
     else
     return 'direita'
    }
}

console.log(carro.dobrar(889))

switch(carro.placa){
    case 234:
        console.log('não está certo')
        break;
    case 586:
        console.log('Esta é a plalca certa')
        break;
    default:
        console.log('padrão')
}
