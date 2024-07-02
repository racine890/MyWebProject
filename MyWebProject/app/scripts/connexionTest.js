// On vérifie si l'utilisateur existe
// Inclure Utilisateur et collections d'abord.
function testerUtilisateur(){
	const champEmail = document.getElementById("userName");
	const champMotDePasse = document.getElementById("userPassword");
	const emailSaisi = champEmail.value;
	const motDePasseSaisi = champMotDePasse.value;
	let utilisateurSaisi = new Utilisateur(emailSaisi, motDePasseSaisi);

	if(database.checkElementInArray('Utilisateurs', utilisateurSaisi)){
		window.location.href = "../pages/menu.html";
	} else {
		alert("Identifiants incorrects!");
	}
}