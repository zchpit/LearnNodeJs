function Spy(target, method) {
   var orignalMethod = target[method];
  
   var result = {
     count: 0
   }

   target[method] = function() {
     result.count++;
     return orignalMethod.apply(this, arguments)
   }

   return result
 }

 module.exports = Spy
