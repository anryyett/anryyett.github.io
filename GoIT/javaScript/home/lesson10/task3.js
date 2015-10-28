/**
 * Created by Elena on 10/28/2015.
 */
function alphaOrder(str) {
    return str.split('').sort().join('');
}

console.log(alphaOrder('webmaster'));