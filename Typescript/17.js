function calcul(n) {
    var T = [];
    for (var i = 0; i < n; i++) {
        T[i] = Number(prompt('remplir la case' + i));
    }
    console.log(T);
    var s = 0;
    for (var i = 0; i < n; i++) {
        s = s + T[i];
    }
    console.log("la somme des valeurs d'un tableau est", s);
}
var n = Number(prompt("Donner la taille du tableau"));
calcul(n);
