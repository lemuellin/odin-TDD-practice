//function that takes a string and returns it reversed

function reverseString(string){
    let revString = [];
    for(let i = 0; i < string.length; i++){
        revString[i] = string[string.length - i - 1];
    }
    return revString.join('');
}

module.exports = reverseString;