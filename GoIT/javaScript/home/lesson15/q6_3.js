 function construct(Class) {
	var args = Array.prototype.slice.call(arguments, 1);
    var object = Object.create(Class.prototype);
    var result = Class.apply(object, args);
    if (typeof result === 'object') {
        return result;
    } else {
        return object;
    }
}