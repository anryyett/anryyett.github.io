/**
 * Created by Elena on 10/29/2015.
 */
function duplicates(arr) {
    arr = arr.sort(function(a,b){ return a - b;});
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i-1] === arr[i] && newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}