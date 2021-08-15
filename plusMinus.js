const arr = [-4,3,-9,0,4,1,9,12,0,-5];


function plusMinus(arr) {

let positive = 0;
let negative = 0;
let zeros = 0;
let a = [ positive, negative, zeros ]

     for ( let i = 0; i < arr.length; i++ ){
         if ( arr[i] > 0 ){
             a[0] += 1;
         }else if ( arr[i] == 0){
             a[2] += 1;
         }else{
             a[1] += 1;
         }
     }
    console.log( (a[0]/arr.length).toFixed(6) )
    console.log( (a[1]/arr.length).toFixed(6) )
    console.log( (a[2]/arr.length).toFixed(6) )
}

const a = plusMinus(arr);

