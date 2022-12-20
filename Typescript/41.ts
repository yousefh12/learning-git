function calcul(){
let n:number
let b:number
do {
  n=Number(prompt("donner un entier strictement positif"))
} while (n<0);
do {
 b=Number(prompt("donner un chiffre decimal"))
  
} while ((b>10)&&(b<0));

let ch= n.toString()
let ch2 = b.toString()

let occ:number=0;
let pos:number=-1;
let i:number=0;
while ((occ<2)&&(i<ch.length)){
  if (ch[i]==ch2) {
   occ++ 
   pos=i;
  }

i++  
}
if (occ==2){
console.log("la deuxieme position du chiffre est",pos);

}else{
console.log("se trouve moins de 2 fois ");

}

}
calcul()


