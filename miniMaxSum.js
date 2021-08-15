

const arr = [1,2,3,4,5];
const arr2 = [5,2,3,4,1];

function miniMaxSum  (arr) {

    let arr_sort = [];
    let min_max = [0,0]

    for(let i=0; i<arr.length-1;i++){
        arr_sort = arr.sort();
        min_max[0] += arr_sort[i];
        min_max[1] += arr_sort[i+1];
    }
    console.log( min_max[0], min_max[1] )
}

const a = miniMaxSum(arr);

