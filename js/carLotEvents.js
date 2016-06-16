var CarLot = (function(carLot){

	function getTextBoxValues (){
		return document.getElementById("textInput").value;
	}

	function applyNewDescritionToCard () {
		console.log("Applying new text");
		var decriptionAreas = document.getElementsByClassName("selected"); //find the selected card at index 0 of this array
		if(decriptionAreas.length === 1 ){ //only need the var if there is a selected element
			var decriptionAreasID = decriptionAreas[0].id;
		} 
		if(decriptionAreas.length === 0){
			alert("Select a card!");
		} else if (getTextBoxValues() === "") {
			alert("Please enter some text");
		} else {
			for(let i = 0; i < document.getElementsByClassName("carDescriptionArea").length; i++){
				if (decriptionAreasID === `carCard--${i}`){
					document.getElementById(`textArea--${i}`).innerText = getTextBoxValues();
				}
			}
		}
	};

	carLot.activateEvents = function (){
		var button = document.getElementById("textInputButton");
		var inventory = CarLot.getInventory;
		button.addEventListener("click", applyNewDescritionToCard);

		for (let i = 0; i < CarLot.getInventory().cars.length; i++){
			document.getElementById(`carCard--${i}`).addEventListener("click", CarLot.selectCard);
		}
	};

	return carLot;
})(CarLot || {});