/**
 * Created by Elena on 10/30/2015.
 */
function fibonacci(n) {

    var arr = [];

    if(n<=0){
        return arr;
    }

    arr.push(0,1);

    for(var i=arr.length; i<n; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }

    return arr;
}