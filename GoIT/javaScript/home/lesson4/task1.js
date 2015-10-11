/**
 * Created by Elena on 10/11/2015.
 */
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(77))