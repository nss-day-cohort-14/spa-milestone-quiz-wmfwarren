var CarLot = (function(carLot){
	carLot.activateEvents = function(){ //this function activates the event listeners and the inventory loading
		var carCards = document.getElementsByClassName("carCard"); //DOM elements
		var button = document.getElementById("textInputButton");
		for (let i  = 0; i < carCards.length; i++){
			carCards[i].addEventListener("click", CarLot.activateSelection); //add event listeners to cards
		}
		button.addEventListener("click", CarLot.getCarDescription); //input button listener
	};
 return carLot;
})(CarLot || {});