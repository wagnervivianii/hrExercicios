let ano = 2052

let copa = 2022;
let olimpiadas = 2024;
let rC = ano - copa;
let rO = ano - olimpiadas;
let rC2 = rC / 4;
let rO2 = rO / 4;
let termoPaCopaC3 = rC2 + 1;
let termoPaOlimpiadas = rO2 + 1;

if(termoPaCopaC3 % 1 == 0){
    console.log('COPA');
}
else if (termoPaOlimpiadas % 1 == 0) {
    console.log('JOGOS');    
}
else{
    console.log('MEH');
}
