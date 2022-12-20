function alpha(a:string,b:string,c:string):void{
  if((a<b)&&(b<c))
  {
    console.log("les noms sont rangees dans l´ordre")
  }
  else
{  
  console.log("les noms ne sont pas rangees dans l´ordre")
}

}
let a=prompt("donner un nom")||""
let b=prompt("donner un deuxieme nom")||""
let c=prompt("donner un troisieme nom")||""

alpha(a,b,c)


