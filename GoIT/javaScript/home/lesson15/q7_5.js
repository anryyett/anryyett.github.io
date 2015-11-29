if (typeof MyNamespace == 'undefined') {
  var MyNamespace = {};
}

MyNamespace.MyClass = function (string) {
  this.sayHello = function () {
    return string;
  };
}