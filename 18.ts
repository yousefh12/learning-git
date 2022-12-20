function somme(){
  let T=[1,2,5,4,8,7,9,8,5,7];
  let P=[1,2,5,4,8,7,9,8,5,7];
  let Z:number[]=[]

  for(let i=0;i<=T.length;i++){
 
     Z[i]=T[i]+P[i];
    }
console.log('la somme du troisieme tableau ',Z,' egale aux valeurs du premier tableau ',T,' plus les valeurs du deuxieme tableau ',P);
}

somme()