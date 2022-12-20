function taille(n) {
    var b = n + 10;
    while (n < b) {
        n++;
        console.log(n);
    }
}
var n = Number(prompt("Donner une valeur"));
taille(n);
