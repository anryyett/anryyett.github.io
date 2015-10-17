/**
 * Created by Elena on 10/17/2015.
 */
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

multiplyNumeric(image);

function multiplyNumeric(obj){
    for(var p in obj){
        if(!isNaN(obj[p])){
            obj[p] *= 2;
        }
    }
    return obj;
}

console.log(image);