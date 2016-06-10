var CarLot = (function(carLot){

	carLot.getCarDescription = function(event){
		//call change car description and pass it the input text value
		var description = document.getElementById("textInput").value;
		CarLot.changeCarDescription(description, event);
	}

	carLot.changeCarDescription = function(carDescription, event){
		var decriptionAreas = document.getElementsByClassName("selected"); //find the selected card at index 0 of this array
		if(decriptionAreas.length === 1 ){ //only need the var if there is a selected element
			var decriptionAreasID = decriptionAreas[0].id;
		}
		if(decriptionAreas.length === 0){
			alert("Select a card!");
		} else if (carDescription === "") {
			alert("Please enter some text");
		} else {
			for(let i = 0; i < document.getElementsByClassName("carCard").length; i++){
				if (decriptionAreasID === `cardID--${i}`){
					document.getElementById(`textArea--${i}`).innerHTML = carDescription;
				}
			}
			// decriptionAreas.specificDescription.innerHTML = `<p>${carDescription}</p>`;
			}
		}


	return carLot;
})(CarLot || {});