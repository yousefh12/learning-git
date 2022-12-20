function min(ch:string){
  let s:number=0
  for (let index = 0; index < ch.length; index++) {
    if((ch[index].charCodeAt(0)>=97) && (ch[index].charCodeAt(0) <=122)){
      s++;
    }

    
  }
  console.log("le nombre des lettres minuscles est",s)
}
let ch=prompt("donner une chaine")||""
min(ch)