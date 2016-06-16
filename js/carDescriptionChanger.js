var CarLot = (function(carLot){

	carLot.selectCard = function (event, CarLot.getInventory().cars[i].color){
		targetCard = event.currentTarget;
		//set target card styles
		targetCard.style.borderWidth = "3px";
		targetCard.style.backgroundColor = `${color}`;
		targetCard.classList.add("selected");

		CarLot.deavtivateCards(targetCard);
	};
	
	//the purpose of this function deactivates all cards but the selected car.
	carLot.deavtivateCards = function(target){

		for(let i = 0; i < document.getElementsByClassName("carCard").length; i++){
			if(target.id !== `carCard--${i}`) {
				document.getElementById(`carCard--${i}`).style.borderWidth = "1px";
				document.getElementById(`carCard--${i}`).style.backgroundColor = "white";
				document.getElementById(`carCard--${i}`).classList.remove("selected");

			}
		}
	};

	
	return carLot;
})(CarLot || {});