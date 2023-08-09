function cubeNumber(number) {
    if (typeof number === 'number' && number > 0){
        return Math.pow (number,3);

    }
    else{
        return 'Please provide only positive number';
    }
}
console.log (cubeNumber(3));
console.log (cubeNumber(4));
console.log(cubeNumber('output'));
console.log(cubeNumber(-3));