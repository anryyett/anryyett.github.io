/**
 * Created by Elena on 10/28/2015.
 */
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
var newarr = [];
for(var i=0; i<arr.length; i++){
    if(newarr.indexOf(arr[i]) === -1){
        newarr.push(arr[i]);
    }
}
console.log(newarr);