/**
 * Created by Elena on 10/11/2015.
 */
function pow1(x,n){
    var result = x;

    for(var i=1; i<n; i++){
        result *= x;
    }
    return result;
}