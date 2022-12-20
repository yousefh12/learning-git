function inverse(ch) {
    var M = "";
    for (var index = 0; index < ch.length; index++) {
        M = ch[index] + M;
    }
    console.log('la chaine inverse egale', M);
}
var ch = prompt("Donner un nom") || "";
inverse(ch);
