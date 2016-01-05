/**
 * Created by Lenochka on 02.01.2016.
 */
(function () {
    function Gunman() {
        var self = this;

        this.messages = {
            fire: 'FIRE !!!',
            win: 'YOU WIN !!!',
            lose: 'YOU LOSE !!!'
        }

        this.domElements = {
            gameArea: document.querySelector('.game_area'),
            enemy: document.querySelector('.enemy'),
            btrStart: document.querySelector('.btn_start'),
            message: document.querySelector('.game_message'),
            timers: document.querySelector('.game_timers'),
            youTime: document.querySelector('.you_time'),
            ganmanTime: document.querySelector('.ganman_time')
        };



        this.sounds = {
            intro: new Audio('sounds/intro.m4a'),
            death: new Audio('sounds/death.m4a'),
            fire: new Audio('sounds/fire.m4a'),
            fault: new Audio('sounds/foul.m4a'),
            shot: new Audio('sounds/shot.m4a'),
            wait: new Audio('sounds/wait.m4a'),
            win: new Audio('sounds/win.m4a')
        };

        this.init = function () {
            self.domElements.btrStart.addEventListener('click', self.game);
        };

        this.game = function() {
            self.domElements.btrStart.style.display = 'none';

            self.fireTime = 1600;
            self.canFire = false;
            self.fault = false;

            setTimeout(function(){
                self.move();

            }, 50);

            self.domElements.enemy.addEventListener('transitionend', self.fight);
            self.domElements.enemy.addEventListener('mousedown', self.playerFire);
        };

        this.playerFire = function(){
            self.sounds.intro.pause();
            self.sounds.intro.currentTime = 0;
            if(self.canFire){
                self.sounds.shot.play();

                self.canFire = false;

                self.dead();
                self.showMessage(self.messages.win);

                self.sounds.win.play();
            }else{
                self.canFire = true;

                self.clearAnimation();
                self.showMessage(self.messages.lose);

                self.sounds.fault.play();
            }
            self.domElements.enemy.removeEventListener('mousedown', self.playerFire);
            self.domElements.enemy.removeEventListener('transitionend', self.fight);
        };

        this.move = function () {
            self.sounds.intro.play();

            self.clearAnimation();
            self.domElements.enemy.classList.add('enemy_move');
            self.domElements.enemy.classList.add('enemy_walk');
        };

        this.fight = function(){
            self.sounds.intro.pause();
            self.sounds.intro.currentTime = 0;

            self.clearAnimation();
            self.domElements.enemy.classList.add('enemy_stay');

            self.sounds.wait.play();

            setTimeout(function () {
                self.showMessage(self.messages.fire);
                self.sounds.fire.play();
                self.canFire = true;

                setTimeout(self.ganmanFire, self.fireTime);
            },100);
        };

        this.ganmanFire = function () {

            self.clearAnimation();
            if (self.canFire) {
                self.domElements.enemy.classList.add('enemy_fire');

                setTimeout(function(){
                    self.sounds.shot.play();
                },1000);

                setTimeout(function () {
                    self.fault = true;
                    self.sounds.fault.play();
                    self.showMessage(self.messages.lose);
                    self.clearAnimation();
                }, 2000);
            }
        };

        this.dead = function(){
            self.clearAnimation();
            self.domElements.enemy.classList.add('enemy_dead');

            setTimeout(function() {
                self.domElements.enemy.classList.remove('enemy_dead');
            }, 1000);
        };

        this.clearAnimation = function(){
            self.domElements.enemy.classList.remove('enemy_move');
            self.domElements.enemy.classList.remove('enemy_walk');
            self.domElements.enemy.classList.remove('enemy_stay');
            self.domElements.enemy.classList.remove('enemy_fire');
            self.domElements.enemy.classList.remove('enemy_dead');
        };

        this.showMessage = function(message){
            self.domElements.message.textContent = message;
            self.domElements.message.classList.add('game_message_show');

            setTimeout(function(){
                self.domElements.message.classList.remove('game_message_show');
            },2000);

            if(message !== self.messages.fire){
                setTimeout(function(){
                    self.domElements.btrStart.style.display = 'inline-block';
                },2000);
            }
        }
    }

    var gunman = new Gunman();
    gunman.init();
})();