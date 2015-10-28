/**
 * Created by Elena on 10/28/2015.
 */
function getType(x){
    return typeof x;
}

console.log(getType({}));
console.log(getType(true));
console.log(getType(function(){}));
console.log(getType(12));
console.log(getType('string'));
console.log(getType(undefined));
