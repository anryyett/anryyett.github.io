/**
 * Created by Elena on 10/18/2015.
 */
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(str){
    var unarr = [];
    for(var i=0; i< str.length; i++){
        if(unarr.indexOf(str[i])=== -1){
            unarr.push(str[i]);
        }
    }
    return unarr;
}

console.log( unique(strings) ); // кришна, харе, 8-()