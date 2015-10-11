/**
 * Created by Elena on 10/11/2015.
 */
function checkStr(str){
    if(str.length <= 20){
        return str;
    }
    return str.slice(0, 17)+ '...';
}