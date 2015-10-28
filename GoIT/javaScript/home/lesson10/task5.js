/**
 * Created by Elena on 10/28/2015.
 */
function getLongestWord(str){
    var arr = str.split(" ");
    var longest='';

    for(var i=0; i<arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}

console.log(getLongestWord("Web Development Tutorial"));