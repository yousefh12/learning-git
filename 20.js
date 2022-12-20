function compare(n) {
    var T = [];
    for (var i = 0; i <= n; i++) {
        T[i] = Number(prompt('remplir la case du tableau' + i));
    }
    var Max = T[0];
    var pos = 0;
    for (var i = 0; i <= n; i++) {
        if (T[i] > Max) {
            Max = T[i];
            pos = i;
        }
    }
    console.log('la valeur superieur est', Max, 'et sa position est ', pos);
}
var x = Number(prompt('Donner la taille'));
compare(x);
