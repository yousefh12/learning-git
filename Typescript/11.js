function factorielle(n) {
    var b = 1;
    for (var i = 1; i <= n; i++) {
        b = b * i;
    }
    console.log("la factorielle de ", n, " ! est ", b);
}
var n = Number(prompt("donner une variable"));
factorielle(n);
