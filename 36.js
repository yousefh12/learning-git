function calcul() {
    var T = [];
    var n;
    do {
        n = Number(prompt("Donner la taille"));
    } while ((n < 2) && (n > 20));
    for (var i = 0; i < n; i++) {
        T[i] = Number(prompt('remplir la case du  tableau' + i));
    }
    var c = 0;
    var j = 0;
    var pos = -1;
    while (c < 1 && j < n) {
        if (T[j] % 2 == 0) {
            c++;
            pos = j;
        }
        j++;
    }
    if (pos == -1) {
        console.log(" pas de pair");
    }
    else {
        console.log("l'indice du nombre pair =", pos);
    }
}
calcul();
