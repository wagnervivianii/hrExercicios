let produtos =
[
    {
      "nome": "Camiseta",
      "preco": 7000
    },
    {
      "nome": "Tenis",
      "preco": 8000
    },
    {
      "nome": "Relogio",
      "preco": 15000
    }
  ]
  let somaGeral = 0;
  let somaTop = 0;

  for( valor of produtos){
      somaGeral += valor.preco;
  }
  for(i of produtos){
      if(i.preco >= 10000){
          somaTop += i.preco;
    }
  }
    let resultado ={
        'totalTop':somaTop,
        'percentual':(somaTop / somaGeral )
      }
  console.log(resultado);