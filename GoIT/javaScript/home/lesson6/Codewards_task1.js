/**
 * Created by Elena on 10/17/2015.
 */
function getMissingElement(superImportantArray){
    superImportantArray.sort(function(a,b){return a-b;});
    for(var i=0; i<=superImportantArray.length; i++){
        if(superImportantArray[i] !== i){
            return i;
        }
    }
}