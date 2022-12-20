function supp(ch) {
    var ch1 = "";
    for (var index = 0; index < ch.length; index++) {
        if (ch[index] != " ") {
            ch1 = ch1 + ch[index];
        }
    }
    console.log('la chaine sans espaces est', ch1);
}
var ch = prompt('donner un nom') || "";
supp(ch);
