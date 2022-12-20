function calcul(){
  let T:number[]=[]
  let n :number
  do { 
    n=Number(prompt("Donner la taille")) 
  } while ((n<2)&&(n>20));
  for (let i = 0;i<n; i++) {
     
      T[i]=Number(prompt('remplir la case du  tableau'+i)) 
     
}
let c=0;
let j=0;
let pos=-1;
while (c<1 && j<n){
  if(T[j]%2==0){
    c++
    pos=j
  }
  
    j++
}

if (pos==-1) {
  console.log(" pas de pair")
}
else{
  console.log("l'indice du nombre pair =",pos)
}


}
calcul()
