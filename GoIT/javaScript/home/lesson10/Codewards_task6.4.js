/**
 * Created by Elena on 10/30/2015.
 */
function count (string) {

    if(string.length > 0){
        var letters = new Object;

        for(x = 0, length = string.length; x < length; x++) {
            var l = string.charAt(x)
            letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
        }

        return letters;
    }
    return {};
}