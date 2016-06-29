function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  var carInfoDOMEle = document.getElementById("carInfoContainer");
  // var card = "";
  
  for(let i = 0; i < inventory.cars.length; i++){
		currentCar = inventory.cars[i];
		var carAvailability = (function(){
			if (currentCar.purchased === false) {
				return "The car is available for purchase";
			} else {
				return "The car is not available for purchase";
			}
			})();

			if (i % 3 === 0){ //create a new row div every even multiple of 3 card
				let newRowDiv = document.createElement("div");
				let rowClass = document.createAttribute("class");
				let rowID = document.createAttribute("id");
				let rowIDNum = Math.floor(i / 3);
				rowClass.value = "row";
				rowID.value = `row--${rowIDNum}`;
				newRowDiv.setAttributeNode(rowClass)
				newRowDiv.setAttributeNode(rowID)
				carInfoDOMEle.appendChild(newRowDiv);
				var currentRow = document.getElementById(`row--${rowIDNum}`); //this is used to append cards later
			}
			//create the current card
			let newCarDiv = document.createElement("div");
			let newCarMakeAndModel = document.createElement("h2");
			newCarMakeAndModel.innerText = `${currentCar.make} ${currentCar.model}`;
			let newCarYear = document.createElement("h3");
			newCarYear.innerText = `${currentCar.year}`;
			let newCarPrice = document.createElement("p");
			newCarPrice.innerText = `$${currentCar.price}`;
			let newCarColor = document.createElement("p");
			newCarColor.innerText = `${currentCar.color}`;
			let newCarAvailable = document.createElement("p");
			newCarAvailable.innerText = `${carAvailability}`;
			let newCarText = document.createElement("p");
			newCarText.innerText = `${currentCar.description}`;

			let newCarDivID = document.createAttribute("id");
			let newCarDivClass = document.createAttribute("class");
			let newCarColorID = document.createAttribute("id");
			let newCarTextID = document.createAttribute("id");

			let newCarMakeAndModelClass = document.createAttribute("class");
			newCarMakeAndModelClass.value = "makeAndModel";
			let newCarTextClass = document.createAttribute("class");
			newCarTextClass.value = "carDescriptionArea";
			let carAvailabilityClass = document.createAttribute("class");
			carAvailabilityClass.value = "availability";

			newCarDivID.value = `carCard--${i}`;
			newCarDivClass.value = "carCard col-sm-4";
			newCarColorID.value = `carColor--${i}`;
			newCarTextID.value = `textArea--${i}`;

			newCarDiv.setAttributeNode(newCarDivID);
			newCarDiv.setAttributeNode(newCarDivClass);
			newCarColor.setAttributeNode(newCarColorID);
			newCarMakeAndModel.setAttributeNode(newCarMakeAndModelClass);
			newCarText.setAttributeNode(newCarTextID);
			newCarText.setAttributeNode(newCarTextClass);
			newCarAvailable.setAttributeNode(carAvailabilityClass);
			
			currentRow.appendChild(newCarDiv);

			let carCardDiv = document.getElementById(`carCard--${i}`);

			carCardDiv.appendChild(newCarMakeAndModel);
			carCardDiv.appendChild(newCarYear);
			carCardDiv.appendChild(newCarPrice);
			carCardDiv.appendChild(newCarColor);
			carCardDiv.appendChild(newCarAvailable);
			carCardDiv.appendChild(newCarText);

			carCardDiv.style.borderColor = currentCar.color;
	}
	CarLot.activateEvents();
};

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);