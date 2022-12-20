function TTC(HT:number,AR:number,TVA:number):number{
  return HT*AR*TVA

}
let a=Number(prompt("donner une valeur HT"))
let b=Number(prompt("donner une valeur AR"))
let c=Number(prompt("donner une valeur TVA"))
console.log("la valeur de TTC est",TTC(a,b,c))
