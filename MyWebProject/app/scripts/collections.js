// On crée notre objet Persistent, ça veut dire qu'il faut inclure Persistent d'abord
database = new Persistent();

// Ensuite, on crée nos tableaux stockés si ils n'existent pas.
if(database.getArray('Utilisateurs') == null){
	database.saveArray('Utilisateurs', []);
}
if(database.getArray('Evenements') == null){
	database.saveArray('Evenements', []);
}
if(database.getArray('Participants') == null){
	database.saveArray('Participants', []);
}

// Je n'ai juste pas trouver comment uniformiser ça pour toutes les classes à cause de la différence des attributs.
function trouverEvenementParNom(database, nom){
	let trouve = null;
	const savedArray = database.getArray('Evenements');

	for(let i=0; i<savedArray.length; i++){
			if(nom == savedArray[i].nom){
				trouve = savedArray[i];
				break;
			}
	}

	return trouve;
}

function trouverParticipantParNom(database, nom){
	let trouve = null;
	const savedArray = database.getArray('Participants');

	for(let i=0; i<savedArray.length; i++){
			if(nom == savedArray[i].nom+' '+savedArray[i].prenom){
				trouve = savedArray[i];
				break;
			}
	}

	return trouve;
}