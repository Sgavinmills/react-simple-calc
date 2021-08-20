
const performCalc = (str) => {
   

   
    const arr = str.split(' ');
    if(arr.length === 1) {
        return arr[0];
    }
    const multiplyIndex = arr.indexOf('x') >= 0 ? arr.indexOf('x') : 9999;
    const divideIndex = arr.indexOf('/') >= 0 ? arr.indexOf('/') : 9999;
   
    if (multiplyIndex !== 9999 || divideIndex !== 9999) {
        if (multiplyIndex < divideIndex) {
            const multiplication = Number(arr[multiplyIndex - 1]) * Number(arr[multiplyIndex + 1]);
            arr.splice(multiplyIndex - 1, 3, multiplication.toString());
        } else {
            const division = Number(arr[divideIndex - 1]) / Number(arr[divideIndex + 1]);
            arr.splice(divideIndex - 1, 3, division.toString());
        }
        return performCalc(arr.join(' '));

    }
    const plusIndex = arr.indexOf('+') >= 0 ? arr.indexOf('+') : 9999;
    const subtractIndex = arr.indexOf('-') >= 0 ? arr.indexOf('-') : 9999;
    if (plusIndex || subtractIndex) {
        if (plusIndex < subtractIndex) {
            const addition = parseFloat(arr[plusIndex - 1]) + parseFloat(arr[plusIndex + 1]);
            arr.splice(plusIndex - 1, 3, addition.toString());
        } else {
            const subtraction = Number(arr[subtractIndex - 1]) - Number(arr[subtractIndex + 1]);
            arr.splice(subtractIndex - 1, 3, subtraction.toString());
        }
        return performCalc(arr.join(' '));

    }

  
}

module.exports = { performCalc };