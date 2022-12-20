function codage(ch) {
    var n;
    var T = [];
    var P = [];
    do {
        n = Number(prompt("Donner la taille du chaine"));
    } while ((n < 4) && (n > 12) && (n % 2 != 0));
    for (var i = 0; i < T.length; i++) {
        do {
            T[i] = (prompt('donner un caractere non vide et seulement alphabet' + i) || "");
        } while ((T[i] == "") && (T[i].charCodeAt(0) > 90) && (T[i].charCodeAt(0) < 65) && (T[i].charCodeAt(0) > 122) && (T[i].charCodeAt(0) < 97) && (T[i].length < 26));
    }
    var ch1 = "";
    for (var index = 0; index < T.length; index++) {
        ch = T[index];
        for (var j = 0; j < n; index++) {
            if ((ch[j] == 'A') || (ch[j] == 'E') || (ch[j] == 'I') || (ch[j] == 'O') || (ch[j] == 'U') || (ch[j] == 'Y')) {
                ch1 = ch1 + ch[j] + ch[j].charCodeAt(0);
            }
            else {
                ch1 = ch1 + ch[j];
            }
            P[index] = ch1;
            ch1 = "";
        }
    }
}
var ch = prompt("donner un nom") || "";
codage(ch);
