/**
 * Created by Elena on 10/28/2015.
 */
function myfunction(str){
    var arr = str.split(' ');
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i].substr(0,1).toUpperCase() + arr[i].substr(1);
    }
    return arr.join(' ');
}

console.log(myfunction('the quick brown fox'));