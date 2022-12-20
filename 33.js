function calcul(ch) {
    var nb = 0;
    for (var index = 0; index < ch.length; index++) {
        if ((ch[index] == " ")) {
            nb++;
        }
    }
    nb = nb + 1;
    console.log("le nombre des mots", nb);
}
var ch = prompt("donner un nom") || "";
calcul(ch);
