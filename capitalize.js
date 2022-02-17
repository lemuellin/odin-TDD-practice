// function that takes a string and returns it with the first character capitalized

function capitalize(string){
    let words = string.split(' ');
    let capString = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1); 
    }).join(' ');
    return capString;
}

module.exports = capitalize;