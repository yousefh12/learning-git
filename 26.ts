function occ(n:number){
  let occ:number=0;
  let T=[25,65,47,98,78,32,25]
  for (let index = 0; index < T.length; index++) {
     if(T[index]==n){
occ=occ+1;
     }
    
  }
console.log("l'occurence de ",n,"est",occ)
}
let n=Number(prompt("donner un nombre"))
occ(n)