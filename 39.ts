function  calcul(){
  let n:number
  let T:number[]=[]
  let P:number[]=[]
  let N:number[]=[]

  
  do { 
     n=Number(prompt("Donner la taille")) 
  } 
  while ((n<5)&&(n>20))
  for (let i = 0;i<n; i++) {
    let ch :number
    do { 
      ch =Number(prompt('donner des entiers positifs et negatifs'+i) )
    } while ((ch<0)&&(ch>0))
    T[i]= ch
  }

let k:number=0
let f:number=0
for (let i = 0;i<n;i++) {
  if(T[i]>0){
    P[k]=T[i]
  k++

  }
  else {
    N[f]=T[i];
    f++
  }
}
console.log( P , N , T )
  }
calcul()



  