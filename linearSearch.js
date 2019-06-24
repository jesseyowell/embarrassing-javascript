// You work at a pet store, and a child has asked you to net the only white-spotted goldfish from the fish tank. 
// Write a program that will help you net the right fish.

const myTank = ['jellyfish','clownfish','anglerfish','tunafish','tiger shark','white-spotted goldfish','magikarp','salmon'];

var fishSearch = function(fishTank, fish) {
   var result = null, value;
   for(var i = 0; i < fishTank.length; i++) {
     value = fishTank[i];

     if(value === fish) {
       result = i;
       break;
     }
   }
   if (result !== null) {
     return `This fish is found at position ${result}`;
   }
   else return 'fish not found';
 };