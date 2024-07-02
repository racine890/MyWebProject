class Participant{

	constructor(nom, prenom, nomEvenement){
		this.nom = nom;
		this.prenom = prenom;
		this.nomEvenement = nomEvenement;
	}

	sauvegarder(database){
		database.insertIntoSavedArray('Participants', this);
	}

	egal(participant){
		return (this.nom == participant.nom &&
			this.prenom == participant.prenom
		);
	}

}