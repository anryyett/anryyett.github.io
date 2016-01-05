/**
 * Created by Lenochka on 02.01.2016.
 */
(function () {
    function Gunman() {
        var self = this;

        this.messages = {
            fire: 'FIRE !!!',
            win: 'YOU WON !!!',
            lose: 'GANMAN WON !!!',
            wishes: 'Congratulations, YOU WON! Your reward is '
        }

        this.domElements = {
            gameArea: document.querySelector('.game_area'),
            enemy: document.querySelector('.enemy'),
            btrStart: document.querySelector('.btn_start'),
            message: document.querySelector('.game_message'),
            money: document.querySelector('.game_money')
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

            self.fireTime = 1600;
            self.money = 0;
        };

        this.game = function(level) {

            self.domElements.btrStart.style.display = 'none';

            self.level = +level ? +level : 1;

            self.canFire = false;
            self.fault = false;

            self.domElements.enemy.classList.add('enemy_' + self.level);

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

                self.updateMoney();
                self.nextLevel();
            }else{
                self.canFire = true;

                self.clearAnimation();
                self.showMessage(self.messages.lose);
                self.gameOver();

                self.sounds.fault.play();
            }
            self.domElements.enemy.removeEventListener('mousedown', self.playerFire);
            self.domElements.enemy.removeEventListener('transitionend', self.fight);
        };

        this.nextLevel = function(){
            setTimeout(function(){
                if(self.level != 5){
                    self.domElements.enemy.classList.remove('enemy_' + self.level);
                    self.fireTime -= 300;
                    self.level++;
                    self.game(self.level);
                }else {
                    self.showMessage(self.messages.wishes + self.money + '$');
                }
            },2000);
        };

        self.updateMoney = function(){
            self.money += self.level*100;
            self.domElements.money.textContent = self.money;
        };

        self.resetMoney = function(){
            self.money = 0;
            self.domElements.money.textContent = self.money;
        };

        this.move = function () {
            self.sounds.intro.play();

            self.clearAnimation();

            self.domElements.enemy.classList.add('move_enemy_' + self.level);
            self.domElements.enemy.classList.add('walk_enemy_' + self.level);
        };

        this.fight = function(){
            self.sounds.intro.pause();
            self.sounds.intro.currentTime = 0;

            self.clearAnimation();
            self.domElements.enemy.classList.add('stay_enemy_' + self.level);

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
                self.domElements.enemy.classList.add('fire_enemy_' + self.level);

                setTimeout(function(){
                    self.sounds.shot.play();
                },1000);

                setTimeout(function () {
                    self.fault = true;
                    self.sounds.fault.play();
                    self.showMessage(self.messages.lose);
                    self.gameOver();
                    self.clearAnimation();
                }, 2000);
            }
        };

        self.gameOver = function(){
            self.domElements.enemy.classList.remove('enemy_' + self.level);
            self.resetMoney();
            self.level=1;
        }

        this.dead = function(){
            self.clearAnimation();
            self.domElements.enemy.classList.add('dead_enemy_' + self.level);

            setTimeout(function() {
                self.domElements.enemy.classList.remove('dead_enemy_' + self.level);
            }, 1000);
        };

        this.clearAnimation = function(){
            self.domElements.enemy.classList.remove('move_enemy_' + self.level);
            self.domElements.enemy.classList.remove('walk_enemy_' + self.level);
            self.domElements.enemy.classList.remove('stay_enemy_' + self.level);
            self.domElements.enemy.classList.remove('fire_enemy_' + self.level);
            self.domElements.enemy.classList.remove('dead_enemy_' + self.level);
        };

        this.showMessage = function(message){
            self.domElements.message.textContent = message;
            self.domElements.message.classList.add('game_message_show');

            setTimeout(function(){
                self.domElements.message.classList.remove('game_message_show');
            },2000);

            if(message === self.messages.lose){
                setTimeout(function(){
                    self.domElements.btrStart.style.display = 'inline-block';
                },2000);
            }
        }
    }

    var gunman = new Gunman();
    gunman.init();
})();