let joao = 'PAPEL'
let andre = 'TESOURA'

if(joao == 'PEDRA' && andre == 'TESOURA' || joao == 'PAPEL' && andre =='PEDRA'){
    console.log('JOAO')
}else if(joao == "PAPEL" && andre == 'TESOURA'){
    console.log('ANDRE')
}
if(andre == 'PEDRA' && joao == 'TESOURA' || andre == 'PAPEL' && joao =='PEDRA'){
    console.log('ANDRE')
}else if(andre == "PAPEL" && joao == 'TESOURA'){
    console.log('JOAO')
}
if( joao === andre){
    console.log("EMPATE")
}