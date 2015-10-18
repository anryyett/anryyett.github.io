/**
 * Created by Elena on 10/18/2015.
 */
function getVillainName(birthday){
    return "The " +
        ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"]
            [birthday.getMonth()] + ' ' +
        ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"]
            [(birthday.getDate()+'').substr(-1)];
}