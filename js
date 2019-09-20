/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
var cpt =1;
// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
console.log(solution);


//tant que le nombre est différent de la solution affiche entrez un nombre
do{

	var nombre=prompt("entrez un nombre?");
	console.log(nombre);
	

 if (nombre>solution){
	alert("nombre plus grand");
	cpt++;
}
else if (nombre<solution){
	alert("nombre plus petit");
	cpt++;
}

}while (nombre != solution);

if (nombre==solution) {
	alert("vous avez trouvé la solution en " + compteur + " tentatives");
}



