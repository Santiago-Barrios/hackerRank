const candles =  [3,2,1,3];

function birthdayCakeCandles(candles) {
    const a = Math.max(...candles);
    let max_candle = 0;
    for(let i=0; i<candles.length; i++){
        if( candles[i] == a ){
            max_candle += 1
        }
    }

    return max_candle;
}

a = birthdayCakeCandles(candles);
console.log(a)