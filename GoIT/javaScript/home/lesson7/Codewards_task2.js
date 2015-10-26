/**
 * Created by Elena on 10/24/2015.
 */
function createSecretHolder(secret) {
    var _secret = secret;
    var obj = {
        getSecret: function(){ return _secret;},
        setSecret: function(secret){  _secret = secret;},
    };
    return obj;
}