/**
 * Created by Elena on 11/8/2015.
 */
function printNumbersInterval(){
    var i = 1;
    var timerId = setTimeout(function iteration() {
        console.log(i);
        if (i < 20) setTimeout(iteration, 100);
        i++;
    }, 100);
}

printNumbersInterval();