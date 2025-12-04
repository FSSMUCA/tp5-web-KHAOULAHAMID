function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let total = Number(prompt("Entrez le total HT : "));
let remise = Number(prompt("Entrez la remise en % : "));

console.log("Total final : " + totalAvecRemise(total, remise));