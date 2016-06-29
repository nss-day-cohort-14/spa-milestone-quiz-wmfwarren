var CarLot = (function(carLot){
//gets and activates the selected card
	carLot.selectCard = function (event, color){
		targetCard = event.currentTarget;
		//set target card styles
		targetCard.classList.add("selected");
		targetCard.classList.remove("deselected");
	//call the function to deactivate any other activated cards. 
		CarLot.deavtivateCards(targetCard);

		document.getElementById("textInput").focus();
		document.getElementById("textInput").value = "";
	};
	
	//the purpose of this function deactivates all cards but the selected car.
	carLot.deavtivateCards = function(target){

		for(let i = 0; i < document.getElementsByClassName("carCard").length; i++){
			if(target.id !== `carCard--${i}`) {
				unTargetCard = document.getElementById(`carCard--${i}`);

				unTargetCard.classList.remove("selected");
				unTargetCard.classList.add("deselected");
			}
		}
	};

	
	return carLot;
})(CarLot || {});