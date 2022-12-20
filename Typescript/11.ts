function factorielle(n:number):void{
  let b:number=1;
  for(let i=1;i<=n;i++){
    b=b*i;
  }
 console.log("la factorielle de ",n," ! est ",b)
}
let n=Number(prompt("donner une variable"))
factorielle(n)