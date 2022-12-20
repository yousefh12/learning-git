function calcul() {
    var n;
    var b;
    do {
        n = Number(prompt("donner un entier strictement positif"));
    } while (n < 0);
    do {
        b = Number(prompt("donner un chiffre decimal"));
    } while ((b > 10) && (b < 0));
    var ch = n.toString();
    var ch2 = b.toString();
    var occ = 0;
    var pos = -1;
    var i = 0;
    while ((occ < 2) && (i < ch.length)) {
        if (ch[i] == ch2) {
            occ++;
            pos = i;
        }
        i++;
    }
    if (occ == 2) {
        console.log("la deuxieme position du chiffre est", pos);
    }
    else {
        console.log("se trouve moins d 2 fois ");
    }
}
calcul();
