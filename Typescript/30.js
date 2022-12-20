function exist(c, ch) {
    var T = false;
    for (var index = 0; index < ch.length; index++) {
        if (ch[index] == c) {
            T = true;
        }
    }
    /////////// solution 2 efficace 
    var i = 0;
    while (i < ch.length && T == false) {
        if (ch[i] == c) {
            T = true;
        }
        i++;
    }
    if (T == true) {
        alert("le caractere existe");
    }
    else {
        alert("le caractere n'existe pas");
    }
}
var c = prompt("donner le caractere") || "";
var ch = prompt("donner la chaine") || "";
exist(c, ch);
