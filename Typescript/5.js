function alpha(a, b, c) {
    if ((a < b) && (b < c)) {
        console.log("les noms sont rangees dans l´ordre");
    }
    else {
        console.log("les noms ne sont pas rangees dans l´ordre");
    }
}
var a = prompt("donner un nom") || "";
var b = prompt("donner un deuxieme nom") || "";
var c = prompt("donner un troisieme nom") || "";
alpha(a, b, c);
