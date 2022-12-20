function saisie(){
  let T:number[]=[]

  for(let i=0;i<=5;i++){
   T[i]=Number(prompt('remplir la case'+i))
  }

  let Max:number=T[0];
  let pos = 0 ;
  for (let i=1;i<=5;i++){

    if (T[i]>Max){
      Max=T[i];
       pos=i;
    }
  }
  console.log("le maximum est " , Max , "dans la position " , pos)
}
console.log(saisie())