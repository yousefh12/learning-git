function message(x: number) {

  while (x < 10 || x > 20) {

    if (x < 10) {
      alert("PLUS PETIT")
       x = Number(prompt("DONNER UNE variable"))
    }
    else {
      alert("PLUS grand")
      x = Number(prompt("DONNER UNE variable"))
    }
  }
console.log("reponse convienne")


}
let n = Number(prompt("Donner une valeur"))
console.log(message(n))