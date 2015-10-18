/**
 * Created by Elena on 10/18/2015.
 */
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr){
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');

        obj[sorted] = arr[i];
    }

    var unarr = [];

    for (var key in obj) {
        unarr.push(obj[key]);
    }
    return unarr;
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'