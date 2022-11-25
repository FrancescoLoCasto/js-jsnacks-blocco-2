//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


   const numberUser = prompt("Inserisci il tuo numero")

   if (numberUser % 2 == 0){
      console.log(numberUser)
  } else {
      console.log(numberUser + 1)
  }

