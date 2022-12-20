function schtroumpf(){
let s:number=0
let T=[1,2,5,4,8,7,9,8,5,7];
let P=[1,2];
let n = P.length
let m= T.length
for(let i=0;i<m;i++){
  for(let k=0;k<n;k++){
    s=s+T[i]*P[k];

  }
}
console.log(T,P,'le Schtoumpf sera',s)

}
 
schtroumpf()