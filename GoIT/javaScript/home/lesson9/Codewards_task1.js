/**
 * Created by Elena on 10/28/2015.
 */
function spread(func, args) {
    return func.apply(this, args);
}