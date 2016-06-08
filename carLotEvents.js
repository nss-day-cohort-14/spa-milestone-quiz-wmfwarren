var CarLot = (function(theLotOfCars){
		theLotOfCars.activateEvents = function(){
			CarLot.loadInventory();
		};
 return theLotOfCars;
})(CarLot);