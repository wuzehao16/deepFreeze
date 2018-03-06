/**
 * Expose `deepFreeze()`.
 */

module.exports = deepFreeze;

/**
 * deepFreeze
 * return
 */

 function deepFreeze(obj) {

   var propNames = Object.getOwnPropertyNames(obj);
   propNames.forEach(function(name) {
     var prop = obj[name];
     if (typeof prop == 'object' && prop !== null)
       deepFreeze(prop);
   });

   //(no-op if already frozen)
   return Object.freeze(obj);
 }
