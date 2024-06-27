What is javascript and why we used it ?

-javascript is logic based programming language where we can creat our code project function in that.
-javascript is a high level programming language for build web page.
-Now we used the ES6 (echma script 6) version of javascript ,in other words we called vanila javascript.
-Runtime environment of javascript is node js.

variable:-

-variable is container to store some data.
-In javascript we have 3 types of variables
1. let
2.var
3.const

1. let:-

-let is a type of variable which is used for changing the variable name later.
-Now these days , more of the cases we used let for creating variables.
-let is a block scope code so we have been using let for most of the cases.

2. var:-

-var is a type of variable which is also used for changing the variable later stage.
-var is used in oldest browser so now a days we are don't use var most of the time.

3. const:-
-const is a type of variable where we can't change our data further.
-const means constant to store some data like numbers, integer etc..


task:-
1. Difference between let & var.
2. Difference between var & const.
3. What do you mean by hoisting(when we don't declare values of variable but it execute the code).


Rules of variable:-

 -variable name are case sensative "a" & "A" is different.
 -only letter ,digit,underscore & $ is allowed .(not even space)
 -only letter ,underscore or $ should be 1st charecter.
 reserver word can't be variable name.

 Data types in javascript:-

 -Data types is an attribute associated with a piece of data that tells a computer system how to interpret its value.
 -In data types we used "typeof" operator to know the what type of data it is.
 -Mainly in javascript their are 2 types of data type.

 1.primitive:-
    -in javascript there are 7 types of premitive data types.
        1. Number:- number are type of data type those it contain some numerical value.
        2. String :- String is a type data type that can hold some charecter like name...
        3. Boolean:- In boolean data type we get boolean value like true,false
        4. Undefined:- In undefined data type the data is not define so that it will show undefined.
        5. Null:- In this data type we getbnull for the value means nothing.
        6. Bigint:- In bigint we will get big integer.
        7.Symbol:- In symbol we will get whole symbol as well as the value we get for the data type.

        2. Non-primitive or Reference

          - Non-primitive data types are the type of data type that can hold multiple items in a single time
          - Non-primitive data types are - object,array,function
          Object :-

           -Object is a non-primitive data types which can hold multiple of items in one single entity.
           -Mainly objects are working on (key:value)pair.
           -The left hand side is our keys and right hand side are the values of the following object.

           EX:-
           subha={
            college:"GIET",
            address:"BBSR",
            age:20,
            salary:45000,
            carrier:"Good"
           }



operator in js:-
-operator are the key featuer to do some task or operate some task.
ex. A+B
-in the above example A & B are the operaands,'+' is the operators to do the addition.
1.Arithmetic operators:-(+,-,*,/)
  .modulus -> %
  .Exponentiation -> **

2.unary operator:-
   .Increment -> ++ 
   .Decrement -> --

 3.Assignment operator:-(assign some value to the variables)
 (=, +=, -=, *=, %=, **= )  


4.Comparison operator :-
  -its give the 
  .equal to ->==
  .Not equal to ->!=
  .equal to and types


5.logical operator :- check the logic of the operator (true/false)
 


 Operator in JS :-

-> Operator are the key features to do some task or operate some task.
ex. A + B
-> In the above example A & B are the operands , '+' is the operators to do the addition.
1.Arithmetic Operators:- (+,-.*,/)
 modulus -> % 
 Exponentiation -> **

2.unary operator:= increament -> ++ decrement -> --

3.Assignment operator :- (assign some value to the variables) (=, +=, -=, *=, %=, **=)

4.Comparison operator :- (compair the values)

Its give the eresult true or false.
equal to -> == 
not equal to -> != 
equal to & type -> ===
not equal to & type -> !== (>, >=, <, <=)
5.Logical Operator :- checks the logic of the operator(true/false) Logical AND && table of AND operator is :- cond 1 , cond 2, res (&&)
 T + T = T
 T + F = F
 F + T = F
 F + F = F
    Logical OR || Table of OR operator is :- cond 1 , cond 2, res (||)
      T + T = T
      T + F = T
      F + T = T
      F + F = F
    Logical NOT !

conditional statement :-

to implement some condition in the code

there are 3 types of conditional statements are there

1.If condition :-

if condition is true then statement is true otherwise false. 
syntax :- if(condition){ statement }

2.If-else condition:-

If condition is true then block executed otherwise its terminate to else condition.
 syntax :- if(condition){ statement } else{ statement }

3.else-if condition:-

Its check the condition multiple times where condition is true.
 syntax :- if(condition){ statement } else if(condition) { statement } else if(condition) { statement } else { statement }




Loops :-
-loops are used to execute a piece of code again and again

1.For loop :-
syntax- for(initialization,condition,updation){
 statement
}
EX:-
for(let i=1;i<=5;i++){
  console.log("web bocket")
}
2. While loop:-
syntax-
while(condition){
  statement
  updation
}
3. DO-While loop:-
syntax-
do{
  statement
  updation
}while(condition);

4.For-of loop:-it iterate on string and array.

5. for-in loop:-it iterate over objects(key-value pair)
syntax-
for(let key in objvar){
  statement
}
   *home work*
   1. print all even number 0 to 100
   2.create a game you start with any random game number. ask the user to keep guessing the game number untill the user enters correct value.

String in js:-
-string is a sequence of charecters used to represent text.
-create a string -> let str ="web bocket"
-string length-> str.length
-string indexing -> str[0],str[1],str[2]...


Tamplate literals in js:-
-A way to have embedded expression in string.
-its denoted on``.i.e `today is a great day`

String interpolation:-
-To create string by doing substitution of placeholders.
-ex:-
   `string text ${expression} string text`

   escape symbol :-
   \n-new line
   \t-tab inside the text

   string methods:-
   -these are built in function to manipulate a string.
   1. str.touppercase()
   2. str.tolowercase()
   3.str.trim()
   4.str.slice(start,end)
   5.str.concat(str2)
   6.str.replace(searchval,newval)
   7.str.chatAt(idx) 















