function compare(n:number){
  let T:number[]=[]
  for(let i=0;i<=n;i++){
    T[i]=Number(prompt('remplir la case du tableau'+i));
  }
 let Max=T[0];
 let pos=0;
 for(let i=0;i<=n;i++){
 if(T[i]>Max) {
  Max=T[i];
  pos=i;
 }  
}
console.log('la valeur superieur est',Max,'et sa position est ',pos)
}
let x=Number(prompt('Donner la taille'))
compare(x)