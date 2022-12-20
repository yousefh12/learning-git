function multi(n:number):void{

  for (let i=1;i<11;i++){
 let  s= n*i;
   console.log("la resultat du " , n ,"*" , i ," = " ,s) 
  }

}
let n = Number(prompt("Donner une valeur"))
multi(n)