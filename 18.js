function somme(n) {
    var T = [];
    var P = [];
    var Z = [];
    for (var i = 0; i <= n; i++) {
        T[i] = Number(prompt('remplir la case du premier tableau' + i));
        P[i] = Number(prompt('remplir la case du deuxieme tableau' + i));
        Z[i] = T[i] + P[i];
    }
    console.log('la somme du troisieme tableau ', Z, 'egale aux valeurs du premier tableau', T, 'plus les valeurs du deuxieme tableau', P);
}
var n = Number(prompt("Donner la taille des tableaux"));
somme(n);
