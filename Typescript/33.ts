function calcul(ch:string){
  let nb:number=0;

  for (let index = 0; index < ch.length; index++) {
    if((ch[index]==" ")){
      nb++   
    }
  }
 nb = nb + 1
  console.log("le nombre des mots",nb)
}
let ch=prompt("donner un nom")||""
calcul(ch)