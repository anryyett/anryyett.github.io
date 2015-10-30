/**
 * Created by Elena on 10/30/2015.
 */
function solution(number){

    var sum = 0;

    for(var i=1; i<number; i++){
        if( i%3 == 0 || i%5 == 0){
            sum+= i;
        }
    }

    return sum;
}