function calcul(n) {
    var T = [];
    for (var index = 0; index <= n; index++) {
        T[index] = Number(prompt("Donner les case" + index));
    }
    var Min = T[0];
    for (var index = 0; index <= n; index++) {
        if (T[index] < Min) {
            Min = T[index];
        }
    }
    console.log("la valeur minimale est", Min);
}
var n = Number(prompt("donner la taille"));
calcul(n);
