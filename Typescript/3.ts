function pos(x:number):void{
  if(x>0)
  {
    console.log("le nombre est positif")
  }
  else{
    console.log("le nombre est negatif")
  }
}
let a=Number(prompt("donner une valeur "))
pos(a)