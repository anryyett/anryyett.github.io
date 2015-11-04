/**
 * Created by Elena on 10/29/2015.
 */
function pattern(n){
    var output='';
    if(n > 0) {
        var lines = [];
        var line = Array(n).join(' ');

        for(i=1; i<=n; i++) {
            line+= i%10;
        }
        lines.push(line);

        for(i=1; i<n; i++) {
            lines.push(lines[i-1].substring(1) + ' ');
        }
        output += lines.join('\n');
    }
    return output;
}

console.log(pattern(5));