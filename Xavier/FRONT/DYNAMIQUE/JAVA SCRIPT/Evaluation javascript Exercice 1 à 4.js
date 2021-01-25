
// Exercice 1 -----------------------------------------------------------------------------------------------------------------------------------------------------------------


// Les variables utilisé :
var age;
var jeune = 0;
var moyen = 0;
var vieux = 0;

// La boucle qui classe l'age saisie dans une catégorie : 

do 
{
    age = window.prompt("Entrez un âge svp ");
    // Le cas ou la personne à moins de 20 ans 
        if (age < 20) {
            jeune++                                             
            console.log(age);
        }
    // Le cas ou la personne a entre 40 et 100 ans
        else if ((age >= 40) && (age <100)) {
            vieux++
            console.log(age);
        }
    // Le cas ou la personne a entre 20 et 39 ans   
        else if ((age >= 20) && (age < 40 )) {
            moyen++
            console.log(age);
        }
}
while (age < 100);

// L'alerte final indiquant à l'utilisateur le nombre de jeunes/moyen/vieux saisie : 

window.alert("Il ya a : " + "" + jeune + "" + " jeune(s)" + "\n Il ya a : " + "" + moyen + "" + " adulte(s)" + "\n Il ya a : " + "" + vieux + "" + " vieu(x)" + "\n Il y a : 1 centenaire" )



// Exercice 2 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Les variables utilisé :
var t = window.prompt("Saisissez la table de multiplication à afficher :  ");
var i;

// La fonction dans la quelle on intègre la boucle permettant d'obtenir la table de multiplication du chiffre demander ( jusqu'a 10)
function TableMultiplication(t) {
    for (i = 0; i <= 10; i++ ) 
    {
    // L'incrémentation de i jusqu'a 10 permet d'avoir les tables de 0 à 10 
       var resultat = t * i
       document.write("La table de multiplication de " + "" + t + "" + " x " + i  +  " est : "  + resultat + "<br>" + "<br>")
    

    }

}
TableMultiplication(t)

// Si les exercices son vérifié dans l'ordre la table de multiplication apparaitra a la fin des alertes car elle est en document.write

// Exercice 3 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ici, la liste de nom de base 
var tab = ["\n", "Audrey","Aurelien", "Flavien", "Jeremy", "Laurent","\n", "Melik", "Nouara", "Salem", "Samuel", "Stephane"];
// La ligne ci dessous indique que le mot saisie par l'utilisateur doit être compris dans la liste tab
 var Nom = window.prompt(`Choisi un prénom parmi ceux ci :${[...tab]}.`)
        if(tab.includes(Nom)){
    // Ici, ci le nom est dans la liste il est supprimé de la list et un espace vide est rajouté 
            tab.splice(tab.indexOf(Nom));
            tab.push(" ");
            alert(tab)
        }
    // Une alerte erreur si le nom saisie ne fait pas partie de la liste    
        else{alert("erreur")}
        console.log(tab)


// Exercice 4 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Les variables utilisé :
var pu = window.prompt("Entrez le prix unitaire du produit : ");
var qtecom = window.prompt("Entrez la quantité commandée du produit : ");
var tot = pu * qtecom;
var rem = 0;
var port = 0;
var pap = 0;
var totRem = 0;

// Le cas ou le totale du prix a l'unité multiplié par le nombres d'unité est entre 100 et 200 + ajout de la remise
if ((tot >= 100) && (tot <= 200)) {

        rem = 0.95
} 
// Le cas ou le totale du prix a l'unité multiplié par le nombres d'unité est inférieur à 100 + ajout de la remise
else if(tot < 100) {

    rem = 1
}
// Tout les autres cas + ajout de la remise
else (rem = 0.9);

totRem = tot * rem

// Ici on ajout les frais de port en fonction du totale apres remise 
if (totRem >= 500) {

    port = 1

} else (port = 1.02);

if (totRem <= 300) {

    port = 6
}

if ( port >= 6) {

    pap = totRem + port

} else (pap = totRem * port);

// Alerte final indiquant le résultat
alert("Le prix à payer pour : " + qtecom + "unités, au prix de : " + pu + "€" + "\n à l'unité est : " + pap + "€");






