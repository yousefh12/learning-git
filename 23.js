function calcul(n, a) {
    var s = 1;
    for (var i = 0; i < n; i++) {
        s = a * s;
        ;
    }
    console.log("la puissance s egale ", s);
}
var n = Number(prompt("Donner un entier"));
var a = Number(prompt("donner un nombre"));
calcul(n, a);
