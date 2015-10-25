/**
 * Created by Elena on 10/25/2015.
 */
function Calculator(){
    this.calculate = function(str){
        var split = str.split(' ');
        var a = +split[0];
        var opr = split[1];
        var b = +split[2];

        if (isNaN(a) || isNaN(b) || !methods[opr]) {
            return NaN;
        }

        return methods[opr](a,b);
    }

    var methods = {
        '+' : function(a,b){
            return a+b;
        },
        '-' : function(a,b){
            return a-b;
        }
    }

    this.addMethod = function(key, func){
        methods[key] = func;
    }
}


var calc = new Calculator;

console.log( calc.calculate('3 + 7') );

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result );