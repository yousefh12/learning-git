function TTC(HT, AR, TVA) {
    return HT * AR * TVA;
}
var a = Number(prompt("donner une valeur HT"));
var b = Number(prompt("donner une valeur AR"));
var c = Number(prompt("donner une valeur TVA"));
console.log("la valeur de TTC est", TTC(a, b, c));
