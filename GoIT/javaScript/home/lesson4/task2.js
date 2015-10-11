/**
 * Created by Elena on 10/11/2015.
 */
function checkSpam(str){
    str= str.toLowerCase();
    if(str.indexOf('spam')!== -1 || str.indexOf('sex')!== -1){
        return true;
    }
    return false;
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));