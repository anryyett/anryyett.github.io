var Ghost = function() {
 switch( Math.floor(Math.random() * 4) ) {
    case 0:
      this.color = 'white';
      break;
    case 1:
      this.color = 'yellow';
      break;
    case 2:
      this.color = 'purple';
      break;
    case 3:
      this.color = 'red';
      break;
    default:
      this.color = 'white';
      break;
  }
};
var Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};