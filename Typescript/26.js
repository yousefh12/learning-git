function occ(n) {
    var occ = 0;
    var T = [25, 65, 47, 98, 78, 32, 25];
    for (var index = 0; index < T.length; index++) {
        if (T[index] == n) {
            occ = occ + 1;
        }
    }
    console.log("l'occurence de ", n, "est", occ);
}
var n = Number(prompt("donner un nombre"));
occ(n);
