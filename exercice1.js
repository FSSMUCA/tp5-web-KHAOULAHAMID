let x = "150";
let y = 150;
let z = true;

console.log(typeof x); 
console.log(typeof y); 
console.log(typeof z);


x = Number(x);
console.log("Nouveau type de x :", typeof x);
/*JavaScript peut changer dynamiquement le type d’une variable car il n’impose pas de type fixe à la déclaration. Le moteur du langage adapte le type en fonction de la valeur assignée ou des opérations effectuées.*/