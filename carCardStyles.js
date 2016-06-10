var CarLot = (function (carLot){

	// function identifySelection(event){ //helper function
	// 	return this.currentTarget;
	// };

	carLot.activateSelection = function(event){
		var targetCard = event.currentTarget;	
		var targetCardID = targetCard.id;
		var carInventory = CarLot.getInventory();
		
		for(let i = 0; i < document.getElementsByClassName("carCard").length; i++){
			if(targetCardID === `cardID--${i}`) {
				targetCard.style.borderColor = carInventory.cars[i].color;
				targetCard.style.borderWidth = "3px";
				targetCard.style.backgroundColor = "pink";
				targetCard.classList.add("selected");
			}
		}

		document.getElementById("textInput").focus();

		CarLot.deavtivateCards(targetCard);

	};

	carLot.deavtivateCards = function(target){
		for(let i = 0; i < document.getElementsByClassName("carCard").length; i++){
			if(target.id !== `cardID--${i}`) {
				document.getElementById(`cardID--${i}`).style.borderColor = "black";
				document.getElementById(`cardID--${i}`).style.borderWidth = "1px";
				document.getElementById(`cardID--${i}`).style.backgroundColor = "white";
				document.getElementById(`cardID--${i}`).classList.remove("selected");

			}
		}
	};

	return carLot;
})(CarLot || {});