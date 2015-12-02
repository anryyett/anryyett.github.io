// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
   var obj = this;
   string = string.split(".");
   for (var i = 0; i < string.length; i++){
     if (!obj) { 
       return;
     }
     obj = obj[string[i]];
   }
   return obj;
}