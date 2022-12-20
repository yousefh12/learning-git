function moyen(n) {
    var T = [];
    var s = 0;
    for (var i = 0; i <= n; i++) {
        T[i] = Number(prompt('remplir la case du  tableau' + i));
        s = s + T[i];
    }
    var moy = s / n;
    var k = 0;
    for (var i = 0; i <= n; i++) {
        if (T[i] > moy) {
            k++;
        }
    }
    console.log('le nombre des notes superieur a la moyenne est', k);
}
var n = Number(prompt('donner le nombre des notes du classe'));
moyen(n);
