// cavesofclarity.js
var CAVESOFCLARITY = function() {

  var treasureChests = 3;
  var bats = 345;

  return {
    stalactites: 4235,
    stalagmites: 3924,
    SECRET: {
      openChest: function() {
        treasureChests--;
        alert('DA DADADA DAAAAAAA!');
      }
    }
  };
}();


// Augmentation
CAVESOFCLARITY = (function(caves) {
  var sandScript = '';
  
  caves.setSandScript = function (message){
    sandScript = message; 
  };
  
  return caves;
}) (CAVESOFCLARITY);