/**
 * Created by Elena on 10/29/2015.
 */
function sum (a,b){
    if(b === undefined){
        return function(b){
            return a + b;
        }
    }
    return a + b;
}