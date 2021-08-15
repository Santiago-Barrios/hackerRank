

const s = '07:05:45PM';

function timeConversion(s) {
    s = String(s).toLowerCase();
    let con_am = s.indexOf('am') >= 0;
    if( con_am ){
        const arr = s.slice(0,8).split(':');
        if(arr[0] === '12'){
            arr[0] = '00';
            return `${arr[0]}:${arr[1]}:${arr[2]}`;
        }else{
            return `${arr[0]}:${arr[1]}:${arr[2]}`;
        }
    }else{
        const arr = s.slice(0,8).split(':');
        if( arr[0] === '12' ){
            arr[0] = '12';
            return `${arr[0]}:${arr[1]}:${arr[2]}`;
        }else{
            arr[0] = String (Number(arr[0]) + 12);
            return `${arr[0]}:${arr[1]}:${arr[2]}`;
        }
    }
}

const a = timeConversion(s);
console.log(a);