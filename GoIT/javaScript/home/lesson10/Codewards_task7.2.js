/**
 * Created by Elena on 10/29/2015.
 */
function swap(str){
    var arr = str.split('');
    var newArr= [];
    for(var i=0; i<arr.length; i++) {
        var char = arr[i];
        if(char === char.toLowerCase()) {
            newArr[i] = char.toUpperCase();
        } else {
            newArr[i] = char.toLowerCase();
        }
    }
    return newArr.join('');
}