/**
 * Created by Elena on 11/8/2015.
 */
var typer = (function(obj) {

    return {
        isNumber: function(obj) { return (typeof(obj) === 'number' || obj instanceof Number) && !isNaN(obj);},
        isString: function(obj) { return typeof(obj) === 'string' || obj instanceof String; },
        isArray: function(obj) { return obj instanceof Array; },
        isFunction: function(obj) { return typeof obj === typeof function(){}; },
        isDate: function(obj) { return typeof(obj) === 'date' || obj instanceof Date; },
        isRegExp: function(obj) { return typeof(obj) === 'regexp' || obj instanceof  RegExp; },
        isBoolean: function(obj) { return typeof(obj) === 'boolean' || obj instanceof  Boolean;},
        isError: function(obj) { return typeof(obj) === 'error' || obj instanceof  Error; },
        isNull: function(obj) { return typeof obj === typeof null;},
        isUndefined: function(obj) { return typeof obj === typeof undefined; }
    };

}(null));