function pythagore(a, b, c) {
    if ((a * a) + (b * b) == (c * c)) {
        alert("c'est un triplet de pythagore");
    }
    else {
        alert("c'est pas un triplet de pythagore");
    }
}
var a = Number(prompt("donner un 1ier nombre"));
var b = Number(prompt("donner un 2eme nombre"));
var c = Number(prompt("donner un 3eme nombre"));
pythagore(a, b, c);
