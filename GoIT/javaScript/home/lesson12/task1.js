/**
 * Created by Elena on 11/8/2015.
 */
function printNumbersInterval(){
    var i = 1;
    var timerId = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}

printNumbersInterval();