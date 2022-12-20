function calcul(n:number,a:number){
let s:number=1
 for (let i = 0; i<n ;i++) {
  s=a*s;
  
 }
 console.log("la puissance s egale ",s)
}
let n=Number(prompt("Donner un entier"))
let a=Number(prompt("donner un nombre"))
calcul(n,a)