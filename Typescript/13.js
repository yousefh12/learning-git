function saisie1() {
    var T = [];
    var i = 0;
    while (T[i] != 0) {
        i = i + 1;
        T[i] = Number(prompt('remplir la case' + i));
    }
    var Max = T[0];
    var pos = 0;
    for (var i_1 = 1; i_1 <= 5; i_1++) {
        if (T[i_1] > Max) {
            Max = T[i_1];
            pos = i_1;
        }
    }
    console.log("le maximum est ", Max, "dans la position ", pos);
}
saisie1();
