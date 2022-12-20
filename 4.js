function produit(x, y) {
    if ((x > 0) && (y > 0) || (x < 0) && (y < 0)) {
        console.log("le produit est positif");
    }
    else {
        console.log("le produit est negatif");
    }
}
var a = Number(prompt("donner une valeur"));
var b = Number(prompt("Donner une valeur"));
produit(a, b);
