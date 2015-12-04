/**
 * Created by Elena on 10/28/2015.
 */

function suffle(arr){
var randomIndex = 0;
var itemAtIndex = arr.length-1;
    for (var i = arr.length-1; i >=0; i--) {

        randomIndex = Math.floor(Math.random()*(i+1));
        itemAtIndex = arr[randomIndex];

        arr[randomIndex] = arr[i];
        arr[i] = itemAtIndex;
    }
    return arr;
}

var sortArr = [1,2,3,4,5,6,7,8,9];

console.log(suffle(sortArr));