function array() {
  let n:number
  let T:string[]=[]
  let V:string[]=[]
  let C:string[]=[]


    do {
      n=Number(prompt("donner la taille"))
    } while (n<0);
  for (let i = 0;i<n; i++) {
     
       T[i] =prompt('donner un caractere '+i)||"" 

}
let k:number=0;
let f:number=0;
for (let i = 0; i < n; i++) {
  if((T[i]=='A')||(T[i]=='E')||(T[i]=='I')||(T[i]=='O')||(T[i]=='U')||(T[i]=='Y')&& (T[i]=='a')||(T[i]=='e')||(T[i]=='i')||(T[i]=='o')||(T[i]=='u')||(T[i]=='y')){
    V[k]=T[i];
k++
  }
  else{
C[f]=T[i]
f++
  }
  
}

console.log(" tableau initiale " , T);
console.log(" tableau voyelle",V);
console.log(" reste ",C);


 
}
array()