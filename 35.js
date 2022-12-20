function somme() {
    var s = 0;
    var ch = [];
    var T = [];
    var n = Number(prompt("Donner la taille"));
    for (var index_1 = 0; index_1 < n; index_1++) {
        T[index_1] = Number(prompt("remplir la case" + index_1));
    }
    var index = 0;
    while ((T[index] != 0) && (index < n)) {
        s = s + T[index];
        index++;
    }
    console.log('la somme =', s);
}
somme();
