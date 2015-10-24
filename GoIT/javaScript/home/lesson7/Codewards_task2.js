/**
 * Created by Elena on 10/24/2015.
 */
function createSecretHolder(secret) {
    var obj = {
        mySecret: secret,
        getSecret: function(){ return this.mySecret;},
        setSecret: function(secret){  this.mySecret = secret;},
    };
    return obj;
}