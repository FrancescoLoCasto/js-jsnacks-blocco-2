//Calcola la somma dei primi 10 numeri di un array.

   const arrayNumber = [12,23,67,89,13,98,134,29,987,234]

   let allNumbers = 0

   let value = arrayNumber[0]


   for (let i = 0; i < 10; i++) {
      allNumbers += arrayNumber[i];
      
      if(value < arrayNumber[i]){
         value = arrayNumber[i]
      }
   } 

   
   
   mid = allNumbers / 10  

   console.log(allNumbers);
   console.log(mid);
   console.log(value);