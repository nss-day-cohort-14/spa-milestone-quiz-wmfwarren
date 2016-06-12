var CarLot = (function (carLot) {
  var inventory = {};

    carLot.getInventory = function () { //this function gets and returns the inventory
    	return carLot.inventory;
    };

    carLot.loadInventory = function (popPage) { //this function loads and parses the JSON
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      	inventory = JSON.parse(inventoryLoader.responseText);
      	popPage(inventory);
      });

      inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();	
    };

    return carLot;

})(CarLot || {});