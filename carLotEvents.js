var CarLot = (function(carLot){
		
	
	carLot.activateEvents = function(){
		var carCards = document.getElementsByClassName("carCard");
		for (let i  = 0; i < carCards.length; i++){
			carCards[i].addEventListener("click", CarLot.activateSelection);
		}
	};
 return carLot;
})(CarLot || {});