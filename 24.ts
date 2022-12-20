function calcul(){
  let T:number[]=[]
  let n :number
  do { 
    n=Number(prompt("Donner la taille")) 
  } while ((n<5)&&(n>20)); 

let s:number=0;

for (let i = 0;i<=n; i++) {
  
  do { 
    T[i]=Number(prompt('remplir la case du  tableau'+i)) 
  } while (T[i]<0); 
  s=s+T[i]; 
}

 
  let moy:number=s/n;
  console.log("la moyenne arithmetique egale",moy)
  
}

calcul()