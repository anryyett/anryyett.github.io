/**
 * Created by Elena on 10/18/2015.
 */
function isPal(str){

    var lowStr = str.toLowerCase();
    lowStr = lowStr.replace(/\s+/g, '');

    for(var i = 0; i < lowStr.length / 2; i++){
        if (lowStr[i] !== lowStr[lowStr.length-i-1]) {
            return false;
        }
    }

    return true;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false