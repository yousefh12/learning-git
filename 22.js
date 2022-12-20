function date(j, m, a) {
    if (((j >= 1 && j <= 31) && (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (a > 1970)) || ((j >= 1 && j <= 30) && (m == 4 || m == 6 || m == 9 || m == 11) && a > 1970) || ((m == 2) && (j >= 1 && j <= 28) && (a > 1970)) || ((m == 2) && (j >= 1) && (j <= 29) && (a % 4 == 0))) {
        alert('la date est valide');
    }
    else {
        alert('la date est non valide');
    }
}
var j = Number(prompt("donner le jour"));
var m = Number(prompt("donner le mois"));
var a = Number(prompt("donner l'annee"));
date(j, m, a);
