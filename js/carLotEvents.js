var CarLot = (function(carLot){

	function getTextBoxValues (){
		return document.getElementById("textInput").value;
	}

	function applyNewDescritionToCard () {

	}

	carLot.activateEvents = function (){
		var button = document.getElementById("textInputButton");

		button.addEventListener("click", CarLot.applyNewDescritionToCard);

	};

	return carLot;
})(CarLot || {});