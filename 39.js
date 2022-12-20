function calcul() {
    var n;
    var T = [];
    var P = [];
    var N = [];
    do {
        n = Number(prompt("Donner la taille"));
    } while ((n < 5) && (n > 20));
    for (var i = 0; i < n; i++) {
        var ch = void 0;
        do {
            ch = Number(prompt('donner des entiers positifs et negatifs' + i));
        } while ((ch < 0) && (ch > 0));
        T[i] = ch;
    }
    var k = 0;
    var f = 0;
    for (var i = 0; i < n; i++) {
        if (T[i] > 0) {
            P[k] = T[i];
            k++;
        }
        else {
            N[f] = T[i];
            f++;
        }
    }
    console.log(P, N, T);
}
calcul();
