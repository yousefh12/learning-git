function produit(x:number,y:number){
  if((x>0)&&(y>0)||(x<0)&&(y<0))
  {
    console.log("le produit est positif")
  }
  else
  {
    console.log("le produit est negatif")
  }
}
let a=Number(prompt("donner une valeur"))
let b=Number(prompt("Donner une valeur"))
produit(a,b)