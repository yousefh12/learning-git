function somme(n:number):void{
  let b=0;
  for(let i=1;i<=n;i++){
    b=b+i;
  }
  console.log(b)
}
let n=Number(prompt("donner une valeur"))
somme(n)