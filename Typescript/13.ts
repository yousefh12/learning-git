function saisie1(){
  let T:number[]=[]
let i=0;
T[0] =Number(prompt('remplir la case 0'))
  while(T[i]!=0){
    i=i+1;
   T[i]=Number(prompt('remplir la case'+i))
  }

  let Max:number=T[0];
  let pos = 0 ;
  for (let i=1;i<T.length;i++){

    if (T[i]>Max){
      Max=T[i];
       pos=i;
    }
  }
  console.log("le maximum est " , Max , "dans la position " , pos)
}
saisie1()