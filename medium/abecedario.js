let letra = 'm';
let palavras = ["mamao","maca","melao","melancia","laranja"];

contador = 0
for(i of palavras){
    if(i.slice(0, 1) != letra){
        contador +=1
    }
}
console.log(contador);
