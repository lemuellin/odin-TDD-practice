let numArr;
let cipherStr;

function caesarCipher(string, shift) {
    numArr = [];
    cipherStr = [];
    str2Num(string);
    numShift(numArr, shift);
    num2Str(numArr);
    return cipherStr;
} 

function str2Num(string) {
    for (let i = 0; i < string.length; i++){
        numArr[i] = string.charCodeAt(i);
    }
    return numArr;
}

function numShift(numArr, shift) {
    if (shift > 0){
        shift = shift % 26;
    }else if(shift < 0){
        shift = shift % -26;
    }
    
    for (let i = 0; i < numArr.length; i++){
        if (numArr[i] >= 65 && 95 >= numArr[i]){
            // Upper Case
            numArr[i] = numArr[i] + shift;
            if(numArr[i] > 90) {
                numArr[i] = numArr[i] - 26;
            }else if(numArr[i] < 65){
                numArr[i] = numArr[i] + 26;
            }
        }else if(numArr[i] >= 97 && 122 >= numArr[i]){
            // Lower Case
            numArr[i] = numArr[i] + shift;
            if(numArr[i] > 122) {
                numArr[i] = numArr[i] - 26;
            }else if(numArr[i] < 97){
                numArr[i] = numArr[i] + 26;
            }
        }else{
            // punctuation
        }
    }
    return numArr;
}

function num2Str(numArr) {
    cipherStr = String.fromCharCode(...numArr);
    return cipherStr;
}

module.exports = caesarCipher;