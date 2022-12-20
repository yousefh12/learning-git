function PGCD(a, b) {
    do {
        a = Number(prompt("donner 1er nombre"));
        b = Number(prompt("donner 2ieme nombre"));
    } while ((a < 0) && (b < 0));
    while (a == b) {
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    console.log('le PGCD =', a);
}
PGCD(a, b);
