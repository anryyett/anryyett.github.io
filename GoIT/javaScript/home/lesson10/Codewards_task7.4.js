/**
 * Created by Elena on 10/29/2015.
 */
function pattern(n){
    var output='';
    for(var i=1; i<=n; i++){
        for(var j=1; j<=n-i; j++){
            output+=' ';
        }
        for(var j=1; j<=n; j++){
            output+= '' + j;
        }
        for(var j=0; j<=i; j++){
            output+=' ';
        }
        output+='\n';
    }
    console.log(output);
    return output;
}