/*
arrays
 -create Arrays[tow Methods] new array() + []
 -access Arrays Elements */

//  let myfriends = ["ahmed","Mohamed","sayed"];

//  console.log(myfriends[0]) 
//  console.log(myfriends[2],myfriends[1])
//  console.log(myfriends[1][2])

 /*loop
 for*/
 /*task1*/
 for(let i = 1; i <= 10; i++){
    document.writeln(i) 
 }

 document.writeln("<br>")
/*task2*/
 let a= 1;
 while (a <=10){  
 document.writeln(a);
 a++}

 document.writeln("<br>")
 /*task3*/
 let number=[1, 2, 3, 4, 5]; 
 for(const b of number)
 {document.writeln(b)}

 document.writeln("<br>")
 /*task4*/
 for(let c = 0 ; c<= 10; c++){
   if(c % 2 ==0){
    document.writeln(c)
   }
}
document.writeln("<br>")
/*task5*/
let sum=0
for(let d = 0 ; d<= 10; d++){
    sum+=d
    }
    document.writeln(sum)

document.writeln("<br>")
/*task6*/
let numbers = [1, 2, 3, 4, 5];
let maxNumber = numbers[0];
for(let i = 1; i<number.length; i++){
 if (numbers[i]>maxNumber){ 
  maxNumber = numbers[i]
   }
}
document.writeln(maxNumber)
document.writeln("<br>")
/*task7*/
let num = [5, 4, 3, 2, 1];
let minNum = num[0];
for(let i = 1; i<num.length; i++){
 if (num[i]<minNum){ 
  minNum = num[i]
   }
}
document.writeln(minNum)
document.writeln("<br>")
 /*task11*/
 let Number=[1,2,3,4,5]
 let sum1=0
for(let d = 0 ; d<=Number.length; d++){
    sum1+=d
    }
    document.writeln(sum1/Number.length)
    document.writeln("<br>")  
/*task12*/
let value=[1,2,3,4,5]
  let multiplication=1
for(let f=1;f<=value.length;f++){
    multiplication*=f
}
document.writeln(multiplication)
document.writeln("<br>")
///*task13*/
// function isPrime(number) {
//  if (number < 2) return false; 
// //  let Prime=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) ; 
//   }
//   return true; 
// }
 
// for (let num = 2; num < 20; num++) {
//   if (Prime(num)) {
//       document.write(num); 
//   }
// }
document.writeln("<br>")
// /*task14*/ 

let Num=5
for(let g=1;g<=10;g++){
  multiplication=Num*g
  document.writeln(Num+"*"+g+"="+multiplication+"<br>"
  )
}  
document.writeln("<br>")
/*task15*/
let val=[1,2,3,4,5];
for(let i=1;i<=val.length;i+=2){

  document.writeln(i)}

document.writeln("<br>")
/*task16*/
let valu=[1,2,3,4,5];
for(let i=5;i>0;i--){
   document.writeln(i)}
   document.writeln("<br>")
/*task17*/
let v=[1,2,3,4,5];
let start=[3,4,5,6,7,8]
  for(const v of start){
    if(v<=5){
  document.writeln(v)}}
// {
// document.writeln(start)}
document.writeln("<br>")
/*'task18*/
let n=4
for(i=0;i<=5;i++){
  if(n==i){
  document.write(true)
  }}
  document.writeln("<br>")
  /*task19*/
  let o=[1,2,1,3,2,1]
  let frequency=0
  for(i=0;i<o.length;i++){
    if(o[i]==1){
      frequency+=1
    }
  }
  document.write(frequency)
  document.writeln("<br>")
  /*task20*/
  let b=1;
let q=0;
sum=0
for(let i=2;i<=8;i++){
document.write(q);
sum=q+b;
q=b;
b=sum;}
/*while*/
// let products = ["keyboard","Mouse","pen","pad","Monitor","iphone"];
//  let i = 0;
//  while (i <10){  
//  console.log(products.length);
//  i++}

/*if(index === 3){
   break;
 }
 }*/
// let i = 0
// do {
//     console.log(i);
//     i++;
// } while (false);
// console.log(i);

