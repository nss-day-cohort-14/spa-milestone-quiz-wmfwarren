function populatePage () {
  // Loop over the inventory and populate the page

  var carInfoDOMEle = document.getElementById("carInfoContainer");
  // CarLot.activateEvents();
  var carInventory = CarLot.getInventory();
  
    for(let i = 0; i < carInventory.cars.length; i++){
			currentCar = carInventory.cars[i];
			var carAvailability = (function(){
				if (currentCar.purchased === false) {
					return "The car is available for purchase";
				} else {
					return "The car is not available for purchase";
				}
				})();

     carInfoDOMEle.innerHTML +=
     `
     <div class="col-md-4">
				<h2 class="makeAndModel">${currentCar.make} ${currentCar.model}</h2>
				<h3 class="modelYear">${currentCar.year}</h3>
				<p class="priceTag">Your price $${currentCar.price}</p>
				<p class="carColor">${currentCar.color}</p>
				<p class="carAvailable">${carAvailability}</p>
				<p class="carDescription">${currentCar.description}</p>
	    </div>
     `

  }
  // Now that the DOM is loaded, establish all the event listeners needed
  

}

CarLot.activateEvents();
// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();
//populatePage();
