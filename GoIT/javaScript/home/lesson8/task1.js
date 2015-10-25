/**
 * Created by Elena on 10/25/2015.
 */
var ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
    }
};
ladder.up().up().down().up().down().showStep();