function posneg(n:number) {
  let T:number[]=[]
  for(let i=0;i<n;i++){
    T[i]=Number(prompt('remplir la case'+i));
  }

  let pos:number=0;
  let neg:number=0;
  for(let i=0;i<T.length;i++){
    if (T[i]<0){
      neg++;
    }
    else{
      pos++;
    }

  }
  console.log(T)
  console.log('le nombre des valeurs negatif est',neg,'et le nombre des valeur positif est ',pos)
}
let n=Number(prompt('donner la taille du tableau'))
posneg(n)