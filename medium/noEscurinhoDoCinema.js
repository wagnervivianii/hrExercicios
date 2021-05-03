let obj ={
    temIngresso: true,
    idade: 15,
    temCarteirinha: false,
    censura:16,
    estaComPais:false
}
if(obj.temIngresso == true){

    if(obj.idade < obj.censura && obj.estaComPais ==false){
       console.log('ACESSO NEGADO')
    }
    if(obj.idade >= obj.censura || obj.estaComPais == true){
        if(obj.temCarteirinha == true || obj.idade < 18){
            console.log('MEIA')
        }else{
            console.log('INTEIRA');
        }
    }
}
else{
    console.log('ACESSO NEGADO')
}
