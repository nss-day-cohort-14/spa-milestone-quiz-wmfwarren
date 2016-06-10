var CarLot = (function (carLot) {
  var inventory = null;
  var inventoryLoader = new XMLHttpRequest();


    carLot.getInventory = function () { //this function returns the value of the json file as the car inventory
    	return inventory;
    }

  	carLot.loadInventory = function() { //this function loads the inventory and parses the json file
			inventoryLoader.addEventListener("load", function(eventData){
				inventory = JSON.parse(inventoryLoader.responseText);
				populatePage();
			})
			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();	
		}
 
  return carLot;
})(CarLot || {});