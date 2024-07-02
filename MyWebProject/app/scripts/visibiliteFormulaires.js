// On cache et affiche les formulaires pour ne pas trop charger la page menu
const formulaireEvenementC = document.getElementById('formulaireEvenementCreation');
const formulaireEvenementS = document.getElementById('formulaireEvenementSuppression');
const formulaireParticipantsC = document.getElementById('formulaireParticipantCreation');
const formulaireParticipantsS = document.getElementById('formulaireParticipantSuppression');

formulaireEvenementC.style.display = 'none';
formulaireEvenementS.style.display = 'none';
formulaireParticipantsC.style.display = 'none';
formulaireParticipantsS.style.display = 'none';

function showCreateForm(){
	formulaireEvenementC.style.display = 'block';
	formulaireEvenementS.style.display = 'none';
	formulaireParticipantsC.style.display = 'none';
	formulaireParticipantsS.style.display = 'none';
}

function showDeleteForm(){
	formulaireEvenementC.style.display = 'none';
	formulaireEvenementS.style.display = 'block';
	formulaireParticipantsC.style.display = 'none';
	formulaireParticipantsS.style.display = 'none';
}

function showCreateForm2(){
	formulaireEvenementC.style.display = 'none';
	formulaireEvenementS.style.display = 'none';
	formulaireParticipantsC.style.display = 'block';
	formulaireParticipantsS.style.display = 'none';
}

function showDeleteForm2(){
	formulaireEvenementC.style.display = 'none';
	formulaireEvenementS.style.display = 'none';
	formulaireParticipantsC.style.display = 'none';
	formulaireParticipantsS.style.display = 'block';
}