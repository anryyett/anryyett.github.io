/**
 * Created by Elena on 10/24/2015.
 */
var make_lazy = function (callback) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        return callback.apply(null, args);
    };
};