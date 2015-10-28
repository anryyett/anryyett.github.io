/**
 * Created by Elena on 10/28/2015.
 */
function f(x) {
    return Math.random() * x;
}

function makeCaching(f) {
    var obj= {};
    return function(x) {
        if(!(x in obj)){
            obj[x] = f.apply(this, arguments);
        }
        return obj[x];
    }

    return wrapper;
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение