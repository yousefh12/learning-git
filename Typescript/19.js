function schtroumpf(n, m) {
    var s = 0;
    var T = [];
    var P = [];
    for (var i = 0; i <= n; i++) {
        T[i] = Number(prompt('remplir la case du premier tableau' + i));
    }
    for (var i = 0; i <= m; i++) {
        P[i] = Number(prompt('remplir la case du deuxieme tableau' + i));
    }
    for (var i = 0; i <= n; i++) {
        for (var k = 0; k <= m; k++) {
            s = s + T[i] * P[k];
        }
    }
    console.log(T, P, 'le Schtoumpf sera', s);
}
var n = Number(prompt("Donner la taille du premier tableau"));
var m = Number(prompt('donner la taille du deuxieme tableau'));
schtroumpf(n, m);
