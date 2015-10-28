/**
 * Created by Elena on 10/28/2015.
 */
function getMaxNumber(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15