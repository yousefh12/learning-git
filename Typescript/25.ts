function pythagore(a:number,b:number,c:number){
  if( (a*a)+(b*b)==(c*c )){
alert("c'est un triplet de pythagore")
  }
  else{
    alert("c'est pas un triplet de pythagore")
  }

}
let a=Number(prompt("donner un 1ier nombre"))
let b=Number(prompt("donner un 2eme nombre"))
let c=Number(prompt("donner un 3eme nombre"))
pythagore(a,b,c)

