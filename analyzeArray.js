function analyzeArray(array) {
    let average;

    const total = array.reduce(
        (accumulator, currValue) => accumulator + currValue
    );
    
    average = total / array.length;
    
    let object = {
        'average': average,
        'min': Math.min(...array),
        'max': Math.max(...array),
        'length': array.length,
    }
    
    return object;
}

module.exports = analyzeArray;