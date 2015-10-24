/**
 * Created by Elena on 10/24/2015.
 */
function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        (function (i) {
            callbacks.push(
                function () {
                    return i;
                }
            );
        })(i);
    }

    return callbacks;
}