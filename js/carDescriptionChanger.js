var CarLot = (function(carLot){
//gets and activates the selected card
	carLot.selectCard = function (event, color){
		targetCard = event.currentTarget;
		//set target card styles
		targetCard.style.borderWidth = "5px";
		targetCard.style.backgroundColor = `${color}`;
		targetCard.style.color = "white";
		targetCard.classList.add("selected");
	//call the function to deactivate any other activated cards. 
		CarLot.deavtivateCards(targetCard);
	};
	
	//the purpose of this function deactivates all cards but the selected car.
	carLot.deavtivateCards = function(target){

		for(let i = 0; i < document.getElementsByClassName("carCard").length; i++){
			if(target.id !== `carCard--${i}`) {
				document.getElementById(`carCard--${i}`).style.borderWidth = "1px";
				document.getElementById(`carCard--${i}`).style.backgroundColor = "white";
				document.getElementById(`carCard--${i}`).style.color = "black";
				document.getElementById(`carCard--${i}`).classList.remove("selected");
			}
		}
	};

	
	return carLot;
})(CarLot || {});