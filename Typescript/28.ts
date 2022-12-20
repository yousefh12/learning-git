function inverse(ch:string) {
  let M:string="";
  for (let index = 0; index < ch.length; index++) {
    M=ch[index]+M;

    
  }
console.log('la chaine inverse egale',M)
  
}
let ch=prompt("Donner un nom")||""
inverse(ch)