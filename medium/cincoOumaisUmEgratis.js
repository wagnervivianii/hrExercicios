let precos = [100,500,100];

let soma = 0;
if(precos.length >= 5){
    precos.sort(function(a , b){
        if(a > b) return 1;
        if(a < b) return -1;
    })
    desconto = precos[0];
    for(i of precos){
        soma += i;
    }
    let total = soma - desconto
    console.log(total);
} else {
    for(i of precos){
        soma += i;
    }
    console.log(soma);
}
