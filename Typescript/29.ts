function supp(ch:string){
  let ch1:string="";
  for (let index = 0; index < ch.length; index++) {
     if(ch[index]!=" "){
      ch1=ch1+ch[index];
     }   
  }
  console.log('la chaine sans espaces est',ch1)
}
let ch=prompt('donner un nom')||""
supp(ch)