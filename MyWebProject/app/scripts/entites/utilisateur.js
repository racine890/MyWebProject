class Utilisateur{

	constructor(email, motDePasse){
		this.email = email;
		this.motDePasse = motDePasse;
	}

	// Bien sûr, ce n'est jamais aussi basique dans une application en production
	authentifier(emailSaisi, motDePasseSaisi){
		if(emailSaisi==this.email && motDePasseSaisi==this.motDePasse){
			return true;
		}
		return false;
	}

	sauvegarder(database){
		database.insertIntoSavedArray('Utilisateurs', this);
	}

	egal(utilisateur){
		return (this.email == utilisateur.email &&
			this.motDePasse == utilisateur.motDePasse
		);
	}

}