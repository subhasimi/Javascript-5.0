// web bocket-5 Times

// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")

//in loop
// for(let i=1;i<=5; i++){
//     console.log("web bocket")
// }
//calculate sum of 1 to 5

// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum +1;
//     console.log("sum =",sum);
// }

// let i=1;
// while(i<=5){
//     console.log("i= ",i)
//     i++;
// }

// let i=1;
// do{
//     console.log("web bocket");
//     i++;
// }while(i<=5)

// let str = "web bocket";
// /* iterate the charecters */
// for(let i of str){
//     console.log(i)
// }

// let str ="javascript"
// let size=0;
// for(let i of str){
//     console.log("i =",i);
//     size++;
// }
// console.log("string size=",size);

let student={
    name:"subhasmita",
    age:20,
    CGPA:9.7,
    ispass:true,
}
//let side part is my keys & right side is my values
//here name,age,CGPA,ispass is my keys
//subhasmita,20,9.7,true is my values

for(let key in student){
    console.log("key =",key,"value =",student[key])
}