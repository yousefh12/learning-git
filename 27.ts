function calcul(n:number){
  let T:number[]=[]

  for (let index = 0; index <n; index++) {
    T[index]=Number(prompt("Donner les case"+index))
  }
let Min=T[0]
for (let index = 0; index <=n; index++) {
  if (T[index]<Min){
    Min=T[index]
  }
  
}
console.log("la valeur minimale est",Min)
}
let n=Number(prompt("donner la taille"))
calcul(n)