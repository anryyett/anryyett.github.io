/**
 * Created by Elena on 10/29/2015.
 */
function descendingOrder(n){
    return +String(n).split('').sort(function( a, b){ return b - a;}).join('');
}