function exist(c:string,ch:string) {
let T:boolean=false
  for (let index = 0; index < ch.length; index++) {
    if(ch[index]==c){
      T=true;
    }
}


/////////// solution 2 efficace 
let i=0
while(i<ch.length && T==false){
  if(ch[i]==c){
    T=true;
  }
  i++
}

if (T==true) {
alert("le caractere existe")
  
} else {
alert("le caractere n'existe pas")
}
}
let c=prompt("donner le caractere")||""
let ch=prompt("donner la chaine")||""
exist(c,ch)

