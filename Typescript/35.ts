function somme(){
  let s=0
  let ch:string[]=[]
  let T:number[]=[]
  let n=Number(prompt("Donner la taille"))
  
  for (let index = 0; index < n; index++) {
    T[index]=Number (prompt("remplir la case"+index))
    
  }
  let index=0
 while ((T[index]!=0)&&(index<n)) {
  s=s+T[index]
  index++
 }
console.log('la somme =',s)
}
somme()