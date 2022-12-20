function array() {
    var n;
    var T = [];
    var V = [];
    var C = [];
    do {
        n = Number(prompt("donner la taille"));
    } while (n < 0);
    for (var i = 0; i < n; i++) {
        T[i] = prompt('donner un caractere ' + i) || "";
    }
    var k = 0;
    var f = 0;
    for (var i = 0; i < n; i++) {
        if ((T[i] == 'A') || (T[i] == 'E') || (T[i] == 'I') || (T[i] == 'O') || (T[i] == 'U') || (T[i] == 'Y') && (T[i] == 'a') || (T[i] == 'e') || (T[i] == 'i') || (T[i] == 'o') || (T[i] == 'u') || (T[i] == 'y')) {
            V[k] = T[i];
            k++;
        }
        else {
            C[f] = T[i];
            f++;
        }
    }
    console.log(" tableau initiale ", T);
    console.log(" table voyelle", V);
    console.log(" reste ", C);
}
array();
