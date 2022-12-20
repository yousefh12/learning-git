function PGCD(a:number,b:number){
  

  while (a!=b) {
    if(a>b){
      a=a-b;
    }
    else{
      b=b-a;
    }
    
  } 
  console.log('le PGCD =',a)
}
let a;
let b;
do{
  a=Number(prompt("donner 1er nombre"))
  b=Number(prompt("donner 2ieme nombre"))

  }
  while((a<0)&&(b<0));
PGCD(a,b)