function somme(n) {
    var b = 0;
    for (var i = 1; i <= n; i++) {
        b = b + i;
    }
    console.log(b);
}
var n = Number(prompt("donner une valeur"));
somme(n);
