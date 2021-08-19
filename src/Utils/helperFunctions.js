exports.performCalc = (str) => {
    const arr = str.split(' ');

    const multiplyIndex = arr.indexOf('x');
    const divideIndex = arr.indexOf('/');

    if (multiplyIndex || divideIndex) {
        if (multiplyIndex < divideIndex) {
            const multiplication = arr[multiplyIndex - 1] * arr[multiplyIndex + 1];
            arr.splice(multiplyIndex - 1, 3, multiplication.toString());
        } else {
            const division = arr[divideIndex - 1] * arr[divideIndex + 1];
            arr.splice(divideIndex - 1, 3, division.toString());
        }

    }
    return arr[0]
}