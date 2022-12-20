function posneg(n) {
    var T = [];
    for (var i = 0; i < n; i++) {
        T[i] = Number(prompt('remplir la case' + i));
    }
    console.log(T);
    var pos = 0;
    var neg = 0;
    for (var i = 0; i < T.length; i++) {
        if (T[i] < 0) {
            neg++;
        }
        else {
            pos++;
        }
    }
    console.log('le nombre des valeurs negatif est', neg, 'et le nombre des valeur positif est ', pos);
}
var n = Number(prompt('donner la taille du tableau'));
posneg(n);
