/**
 * Created by Elena on 10/29/2015.
 */
function add() {

    var sum = 0;

    for(var i=1; i<=arguments.length; i++){
        sum += arguments[i-1] * i;
    }
    return sum;
}