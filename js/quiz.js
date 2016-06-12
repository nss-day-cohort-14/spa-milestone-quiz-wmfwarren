function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  var carInfoDOMEle = document.getElementById("carInfoContainer");
  var card = "";
  
  for(let i = 0; i < inventory.cars.length; i++){
		currentCar = inventory.cars[i];
		var carAvailability = (function(){
			if (currentCar.purchased === false) {
				return "The car is available for purchase";
			} else {
				return "The car is not available for purchase";
			}
			})();
			if ( i % 3 === 0) {
				carInfoDOMEle.innerHTML += `<div class="row">`
			} 
			card += 
					`<div id="cardID--${i}" class="carCard gutter col-sm-4">
					<h2 class="makeAndModel">${currentCar.make} ${currentCar.model}</h2>
					<h3 class="modelYear">${currentCar.year}</h3>
					<p class="priceTag">Your price: $${currentCar.price}</p>
					<p class="carColor">Color: ${currentCar.color}</p>
					<p class="carAvailable">${carAvailability}</p>
					<p id="textArea--${i}" class="carDescriptionArea">${currentCar.description}</p>
					</div>`;
			carInfoDOMEle.innerHTML += card;
			if (i % 3 === 2){
				carInfoDOMEle.innerHTML += '</div>';
			}
		
		card = "";
	}
	CarLot.activateEvents();
};

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);