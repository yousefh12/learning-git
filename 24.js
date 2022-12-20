function calcul() {
    var T = [];
    var n;
    do {
        n = Number(prompt("Donner la taille"));
    } while ((n < 5) && (n > 20));
    var s = 0;
    for (var i = 0; i <= n; i++) {
        do {
            T[i] = Number(prompt('remplir la case du  tableau' + i));
        } while (T[i] < 0);
        s = s + T[i];
    }
    var moy = s / n;
    console.log("la moyenne arithmetique egale", moy);
}
calcul();
