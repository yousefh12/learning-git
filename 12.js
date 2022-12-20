function saisie() {
    var T = [];
    for (var i = 0; i <= 5; i++) {
        T[i] = Number(prompt('remplir la case' + i));
    }
    var Max = T[0];
    var pos = 0;
    for (var i = 1; i <= 5; i++) {
        if (T[i] > Max) {
            Max = T[i];
            pos = i;
        }
    }
    console.log("le maximum est ", Max, "dans la position ", pos);
}
console.log(saisie());
