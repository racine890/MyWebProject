// Inclure collections avant
let elementUl = document.getElementById('app_listeDesEvenements');
const listeEvenements = database.getArray('Evenements');

listeEvenements.forEach(function(evenement) {
    let li = document.createElement("li");
    li.textContent = evenement.nom+" ("+evenement.dateEvenement+")";
    elementUl.appendChild(li);
});