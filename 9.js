function multi(n) {
    for (var i = 1; i < 11; i++) {
        var s = n * i;
        console.log("la resultat du ", n, "*", i, " = ", s);
    }
}
var n = Number(prompt("Donner une valeur"));
multi(n);
