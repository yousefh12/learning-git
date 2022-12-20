function codage(){
  let n :number
  let T:string[]=[]
  let P:string[]=[]
  let ch : string
  do { 
    n=Number(prompt("Donner la taille du chaine")) 
  } while ((n<4)&&(n>12)&&(n%2!=0)); 
  for (let i = 0;i<T.length; i++) {
    let ch2 : string
    do { 
       ch2 =(prompt('donner un caractere non vide et seulement alphabet'+i)||"" )
    } while ((ch2=="")&&(ch2.length<6))
    T[i]= ch2
  }
  let ch1:string=""
  for (let index = 0; index < T.length; index++) {
     ch=T[index];
     for (let j= 0; j< n; index++) {
      if((ch[j]=='A')||(ch[j]=='E')||(ch[j]=='I')||(ch[j]=='O')||(ch[j]=='U')||(ch[j]=='Y')&& (ch[j]=='a')||(ch[j]=='e')||(ch[j]=='i')||(ch[j]=='o')||(ch[j]=='u')||(ch[j]=='y')){
        ch1=ch1+ch[j]+ch[j].charCodeAt(0)
      }
      else{
        ch1=ch1+ch[j]
      }
      P[index]=ch1
      ch1=""

     }
    
  }
}
 
codage()