// Notre classe Participant
class Evenement{

	// Elle a un constructeur, comme toute classe.
	constructor(nom, dateEvenement){
		this.nom = nom;
		this.dateEvenement = dateEvenement;
		this.participants = [];
	}

	// On utilise un objet de type persistent pour enregistrer nos données
	sauvegarder(database){
		database.insertIntoSavedArray('Evenements', this);
	}

	// Pour vérifier l'égalité. Etonamment, ça ne marche pas avec l'opérateur ==.
	egal(evenement){
		return (this.nom == evenement.nom &&
			this.dateEvenement == evenement.dateEvenement
		);
	}

}