function moyen(n:number){
let T:number[]=[]
let s:number=0
for(let i=0;i<=n;i++){
  T[i]=Number(prompt('remplir la case du  tableau'+i));
  s=s+T[i];
}
let moy=s/n
let k=0
for (let i=0;i<=n;i++){
  if (T[i]>moy){
    k++;
  }

}
console.log('le nombre des notes superieur a la moyenne est',k)

}
let n=Number(prompt('donner le nombre des notes du classe' ))
moyen(n)