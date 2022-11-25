   //Crea un array vuoto.
   //Chiedi per 6 volte all'utente di inserire un numero,
   //se è dispari inseriscilo nell'array.

   const arrayNumber = [];


   for(let i = 0; i < 6; i++) {
      const numberUser = prompt("Inserisci il tuo numero")

      if (numberUser % 2 == 1){
         arrayNumber.push(numberUser)
     }
   }

   console.warn(arrayNumber)