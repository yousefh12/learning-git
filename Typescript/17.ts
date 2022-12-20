function calcul(n:number){
  
  let T=[1,2,5,4,8,7,9,8,5,7];
 
  console.log(T);
  let s=0;
  for(let i=0;i<T.length;i++){
    s=s+T[i];
  }
  console.log("la somme des valeurs d'un tableau est",s);
}
let n=Number(prompt("Donner la taille du tableau"));
calcul(n)