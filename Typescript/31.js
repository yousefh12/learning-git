function alpha(ch) {
    var occ = 0;
    var OC = [];
    var c;
    for (var index = 0; index < 26; index++) {
        OC[index] = 0;
    }
    for (var index = 0; index < ch.length; index++) {
        c = ch[index].toUpperCase();
        // if((ch[index].charCodeAt(0)>=65) && (ch[index].charCodeAt(0) <=90))
        var k = c.charCodeAt(0) - 65;
        OC[k] = OC[k] + 1;
    }
    console.log(OC);
}
var ch = prompt("donner une chaine") || "";
alpha(ch);
