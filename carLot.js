var CarLot = (function () {
  var inventory = null;
  var inventoryLoader = new XMLHttpRequest();

  return {
    getInventory: function () {
    	return inventory;
    },
  	loadInventory: function() {
			inventoryLoader.addEventListener("load", function(eventData){
				inventory = JSON.parse(inventoryLoader.responseText);
				populatePage();
			})
			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();	
		}
  };
})();