const array1 = [5,6,7];
const array2 = [3,6,10];

let a = 0;
let b = 0;
let voidArray = [0, 0];

function compareTriples( array1, array2 ){

    for( let i = 0; i < 3; i++ ){

        if (array1[i] > array2[i] ){
             voidArray[0] += 1;
        }else if ( array1[i] == array2[i] ){
            voidArray[1] += 0;
        }else{
            voidArray[1] += 1;
        }
    }
    
    return voidArray;


}

valores = compareTriples(array1, array2);
console.log(valores)