function alpha(ch:string){
  let occ:number=0
  let OC :number[]=[]
  let c :string
 

  for (let index = 0; index <26; index++) {
    OC[index] =0
    
  }

  for (let index = 0; index < ch.length; index++) {
   c = ch[index].toUpperCase()
    // if((ch[index].charCodeAt(0)>=65) && (ch[index].charCodeAt(0) <=90))
   let k=c.charCodeAt(0)-65;

    OC[k]=OC[k]+1

    }
   console.log(OC) 
  }


let ch=prompt("donner une chaine")||""
alpha(ch)