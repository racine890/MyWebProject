class Persistent{

	constructor(){
	}

	// Juste pour enregistrer un tableau dans localstorage
	saveArray(title, theThing){
		localStorage.setItem(
			title,
			JSON.stringify(
				theThing
			)
		);
	}

	// Pour récupérer un tableau depuis localstorage
	getArray(title){
		return JSON.parse(
			localStorage.getItem(
				title
			)
		);
	}

	// Pour vérifier si il y'a un élément dans un tableau stocké dans localStorage.
	checkElementInArray(arrayTitle, element){
		const savedArray = this.getArray(arrayTitle);

		for(let i=0; i<savedArray.length; i++){
				if(element.egal(savedArray[i])){
					return true;
				}
		}

		return false;
	}

	// Trouver l'indice d'un élément dans un tableau stocké.
	indexOf(arrayTitle, element){
		const savedArray = this.getArray(arrayTitle);
		let ind = -1;

		for(let i=0; i<savedArray.length; i++){
				if(element.egal(savedArray[i])){
					ind = i;
					break;
				}
		}

		return ind;
	}

	// Supprimer un élément d'un tableau stocké
	deleteElementFromSavedArray(arrayTitle, element){
		let savedArray = this.getArray(arrayTitle);
		const index = this.indexOf(arrayTitle, element);
		if(index == -1){
			return false;
		}
		if(index==0){
			savedArray.splice(0, 1);
		}else {
			savedArray.splice(index, index);
		}
		this.saveArray(arrayTitle, savedArray);
		return index;
	}

	// Insérer un élément dans un tableau stocké
	insertIntoSavedArray(arrayTitle, element){
		let savedArray = this.getArray(arrayTitle);
		if(this.checkElementInArray(arrayTitle, element)){
			return false;
		}
		savedArray.push(element);
		this.saveArray(arrayTitle, savedArray);
		return true;
	}
}