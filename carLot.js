var CarLot = (function (carLot) {
  var inventory = null;
  var inventoryLoader = new XMLHttpRequest();


    carLot.getInventory = function () {
    	return inventory;
    }

  	carLot.loadInventory = function() {
			inventoryLoader.addEventListener("load", function(eventData){
				inventory = JSON.parse(inventoryLoader.responseText);
				populatePage();
			})
			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();	
		}
 
  return carLot;
})(CarLot || {});