// // Exo1
// function hello() {
//     console.log("Bonjour")
// }
// hello()


// // Exo2
// function tebe(){
//     console.log(5+5)
// }
// tebe()


// // Exo 3
// function pqpas(prenom){
//     console.log(`Bonjour ${prenom}`)
// } 
// pqpas("Farhad")


// // Exo 4
// function typeThree(a,b,c){
//     console.log(
//         typeof a , 
//         typeof b ,
//         typeof c );
// }
// typeThree(1,"AAAAA",true)


// EXO LOGIQUE
// Exo 1
// function justePrix(){
//     let numTries = 1;
//     let randomNum = 10 
//     console.log(Math.floor(Math.random()*20)+1);
//     let answer = +prompt("Nombre au hasard entre 0 et 20");
//     while (numTries < 5 && answer != randomNum ) {
//         if (Math.abs(randomNum - answer)<2) {
//             temp = +prompt("Brulant \Nombre au hasard entre 0 et 20");
//         }else if(Math.abs(randomNum - answer)<3){
//             temp = +prompt("Chaud \Nombre au hasard entre 0 et 20");
//         }else if(Math.abs(randomNum - answer)<=5){
//             temp = +prompt("Tiede \Nombre au hasard entre 0 et 20");
//         }else{
//             temp = +prompt("Froid \Nombre au hasard entre 0 et 20");
//         }
//         answer = temp
//         numTries++
//     }
//     if (answer == randomNum) {
//         return "Bravo dans le mile";
//     }else{
//         return "Game Over";
//     }
// }
// console.log(justePrix());


// // Exo 2
// let vrac =["ABCef",10,true];

// function mixit(tab) {
//     for (let i = 0; i < tab.length; i++) {
//         switch (typeof tab[i]) {
//             case "string":
//                 tab[i]= tab[i].charAt(0).toUpperCase()+tab[i].substr(1).toLowerCase()
//                 alert(tab[i].charAt(0).toUpperCase()+tab[i].substr(1).toLowerCase());
//                 break;
//             case "boolean":
//                 if (tab[i] == true) {
//                     tab[i] = false
//                 }else{
//                     tab[i] = true
//                 } 
//             // Logical NOT , condition ternaire à voir
//                 break;
//             case "number":
//                 tab[i] = tab[i]**2
//                 break;
//             default:
//                 console.log 
//                 break;
//         }
//     }
//     console.log(tab)
// }
// mixit(vrac)


// Exo 3
// let moinMoyenne = [];
// let moyenne = [];
// let plusMoyenne = [];
// function capitole(name,salary){
//     if (salary <1600) {
//         moinMoyenne.push(name)
//     }else if (salary > 1800) {
//         plusMoyenne.push(name)
//     }else{
//         moyenne.push(name)
//     }
// }

// capitole ("Farhad", 2000)
// capitole ("Cactus", 1599)
// capitole ("Bot", 1700)

// console.log(moinMoyenne ,moyenne ,plusMoyenne
// )


// Exo 4
// - Créer une fonction qui va prendre deux paramètres (prenom, age). Pour un concert, vérifie si les personnes, souhaitant participer, sont majeurs. 
// - Si OUi, vous les mettez dans un tableau(vide) du nom de 'concert'. Attention le concert est limité à 7 personnes, cause de covid. :( 
// - Si NON, elle ne rentre pas. 
// - Affichez via une console.log, toutes les personnes présentes au concert avec leur 1er lettre de leurs prénom en majuscule.

// let concert = [];
// function dour(name , age) {
//     if (age > 18 && concert.length < 7) {
//         concert.push(name);
//     }else{
//         alert("Tu ne rentreras point")
//     }
// }
// dour("aarhad", 28);
// dour("barhad", 28);
// dour("carhad", 28);
// dour("Cactus", 2);
// dour("darhad", 28);
// dour("earhad", 28);
// dour("farhad", 28);
// dour("garhad", 28);
// dour("loic", 9000);

// concert.forEach(e => {
//     console.log(e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())
// });