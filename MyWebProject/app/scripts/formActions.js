// Ajouter un évènement dans la liste des évènents
function addEvent(){
	const eventName = document.getElementById("eventName").value;
	const eventDate = document.getElementById("eventDate").value;

	const event = new Evenement(eventName, eventDate);
	event.sauvegarder(database);

	const option = document.createElement('option');
	const option2 = document.createElement('option');
	option.text = option2.text = eventName;
	eventsSelect.add(option);
	deleteFormSelect.add(option2);

	alert("Evènement ajouté!");
}

// Ajouter un participant
function addPerson(){
	const personFName = document.getElementById("personFName").value;
	const personLName = document.getElementById("personLName").value;
	let eventSel = document.getElementById("eventsSelect");

	const person = new Participant(personFName, personLName, eventSel.value);
	person.sauvegarder(database);

	const option = document.createElement('option');
	option.text = personFName+' '+personLName;
	deleteFormSelect2.add(option);

	alert("Personne ajoutée!");
}

// Supprimer un évènement
function deleteEvent(){
	let eventSel = document.getElementById("deleteFormSelect");
	const eventObj = trouverEvenementParNom(database, eventSel.value);
	if(eventObj == null){
		alert("Error : Could not find object with the name \""+eventSel.value+'"');
		return null;
	}
	const objCopy = new Evenement(eventObj.nom, eventObj.dateEvenement);
	const res = database.deleteElementFromSavedArray('Evenements', objCopy);
	if(res == false){
		alert('Error : Could not find object in list');
		return null;
	} else {
		deleteFormSelect.remove(res);
		eventsSelect.remove(res);
	}
	alert('Evenement supprimé!');
}

// Supprimer un participant
function deletePerson(){
	let deleteFormSelect2 = document.getElementById("deleteFormSelect2");
	const eventObj = trouverParticipantParNom(database, deleteFormSelect2.value);
	if(eventObj == null){
		alert("Error : Could not find object with the name \""+deleteFormSelect2.value+'"');
		return null;
	}
	const objCopy = new Participant(eventObj.nom, eventObj.prenom);
	const res = database.deleteElementFromSavedArray('Participants', objCopy);
	if(res == false){
		alert('Error : Could not find object in list');
		return null;
	} else {
		deleteFormSelect2.remove(res);
	}
	alert('Participant supprimé!');
}

let eventsSelect = document.getElementById('eventsSelect');
let deleteFormSelect = document.getElementById('deleteFormSelect');
let deleteFormSelect2 = document.getElementById('deleteFormSelect2');
let events = database.getArray('Evenements');
let people = database.getArray('Participants');
let summaryDiv = document.getElementById('summary');

if(events != null){
	// Charger les évènements existants dans les listes de sélection
	events.forEach(function(singleEvent) {
		let option = document.createElement("option");
		let option2 = document.createElement("option");
		option.textContent = singleEvent.nom;
		option2.textContent = singleEvent.nom;
		eventsSelect.appendChild(option);
		deleteFormSelect.appendChild(option2);
	});

	// Charger la liste des évènements et des participants par évènement
	events.forEach(function(singleEvent) {
		let ul = document.createElement("ul");
		let h3 = document.createElement("h3");
		h3.textContent = singleEvent.nom;
		ul.appendChild(h3);
		people.forEach(function(singlePerson) {
			if(singlePerson.nomEvenement == singleEvent.nom){
				let li = document.createElement("li");
				li.textContent = singlePerson.nom+' '+singlePerson.prenom;
				ul.appendChild(li);
			}
		});
		summaryDiv.appendChild(ul);
	});
}

// Charger les participants dans leur liste de sélection.
if(people != null){
	people.forEach(function(singlePerson) {
		let option = document.createElement("option");
		option.textContent = singlePerson.nom+' '+singlePerson.prenom;
		deleteFormSelect2.appendChild(option);
	});
}
