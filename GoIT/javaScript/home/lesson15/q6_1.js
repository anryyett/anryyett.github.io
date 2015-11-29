function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
    
    Object.defineProperty(this, "fullName", {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(value){
        var split = value.split(' ');
        if(split[0]&&split[1]){
          this.firstName = split[0];
          this.lastName = split[1];
        }
      }
    });
}