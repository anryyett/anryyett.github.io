/**
 * Created by Elena on 10/18/2015.
 */
obj = {
    className: 'my menu menu'
};
function removeClass(obj, cls){
    var arr = [];
    arr = obj.className.split(" ");
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr = arr.slice(0, i).concat(arr.slice(i + 1));
            i--;
        }
    }
    obj.className = arr;
}
removeClass(obj, 'menu');

console.log( obj.className );