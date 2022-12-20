function taille(n:number):void{
 let b:number=n+10;
 while(n<b){
  n++;
  console.log(n);
 }
}
let n = Number(prompt("Donner une valeur"))
taille(n)