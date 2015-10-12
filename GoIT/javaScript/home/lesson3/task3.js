/**
 * Created by Elena on 10/8/2015.
 */
var result = "";
for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0) {
        result = "Fizz";
    } else if (i % 5 == 0) {
        result = "Buzz";
    }
    console.log(result || i);
}