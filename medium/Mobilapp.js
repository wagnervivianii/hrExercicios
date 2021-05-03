// Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará 6 reais,

// Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 1 real por minuto mais 50 centavos por quilômetro percorrido.

// Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida.

// 
let tempo = 5;
let distancia = 20;

if (tempo < 5){
    console.log(600)   
}
else if( tempo >= 5 && tempo < 60){
    tempo *= 100;
    distancia *= 50;
    console.log(tempo + distancia);
}
else if(distancia < 100){
    distancia *= 200;
    console.log(distancia);
}
else if(distancia >= 100){
    distancia *= 150;
    console.log(distancia);
}
