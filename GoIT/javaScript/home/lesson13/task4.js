function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var isRun;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  
  function onReady() {
    alert( 'Кофе готов!' );
    isRun = false;
  }

  this.setOnReady = function(_onReady) {
    onReady = _onReady;
  };

  this.run = function() {
	isRun = setTimeout(function() {
      isRun = null;
      onReady(); 
    }, getTimeToBoil());
  };

  this.isRunning = function() {
    return !!isRun;
  };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});