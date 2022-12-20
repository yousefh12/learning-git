function min(ch) {
    var s = 0;
    for (var index = 0; index < ch.length; index++) {
        if ((ch[index].charCodeAt(0) >= 97) && (ch[index].charCodeAt(0) <= 122)) {
            s++;
        }
    }
    console.log("le nombre des lettres minuscles est", s);
}
var ch = prompt("donner une chaine") || "";
min(ch);
