/**
 * Created by Elena on 10/8/2015.
 */
var a=2, b=10;

out:
    for (var i = a; i < b; i++) {
        for (var j = a; j < i; j++) {
            if(i % j == 0) continue out;
        }
        console.log(i);
    }