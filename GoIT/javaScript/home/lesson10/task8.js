/**
 * Created by Elena on 10/28/2015.
 */
function uniqueElemants(arr){
  var obj = {};
  for(var i=0; i<arr.length; i++){
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return Object.keys(obj).sort(function (a, b) {
    return obj[b] - obj[a];
  });
}

var inputArr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
console.log(uniqueElemants(inputArr));