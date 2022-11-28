// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const lotOfNumbers = [12, 67, 3,78, 178, 6, 48, 77, 66, 45, 11, 23, 13, 14, 15, 16, 90, 18, 19, 20];
let tot = 0;

for (let i = 0; i < lotOfNumbers.length; i++){
    if( i % 2 === 1){
        tot += i;
    }
}

console.log(tot);