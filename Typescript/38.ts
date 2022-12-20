function  calcul(){

let M="";
let ch :string 
do { 
  ch=prompt("Donner le mot") ||""
} while (ch.length>15); 


for (let i =ch.length-1;i>=0;i--) {
  M=M+ch[i]; 
}
if(ch==M){
  alert("palindrome")
}
else{
alert("pas palindrome")
}


}

calcul()