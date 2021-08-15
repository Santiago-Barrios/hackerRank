
const array = [ 1,2,3,4 ];

let suma = 0;

function  simpleArraySum ( size, ar ) {
    
    for ( let i = 0; i < size; i ++ ) {
        suma += ar[i];
    }
    return suma;

}

sumatoria = simpleArraySum(4, array );
console.log(sumatoria);