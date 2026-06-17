##  What Are JavaScript Variables?
A **variable** is a named container used to store data in a program.
Example:


        let x = 56;

 ##  How Do You Declare Variables in JavaScript?
 Declaring a variable means creating it and giving it a name so your 		   
     program can store data in. Use let, const and var.
   Example:
    
     let name = "Maryanne";
     const = 3.14;
     
## Rules for Naming Variables
   The following are the rules for naming variables in JavaScript:
  
 - Only letters, digits, underscores, and dollar signs are permitted in 
   variable names.
 - Spaces are not allowed in variable names.
 - Case matters when it comes to variable names.
 - A letter (alphabet), an underscore (_), or a dollar sign ($) must be 
   the first character in a variable name, any other special characters 
   must not be taken.
 - certain terms such as reserved words in javascript shouldn’t be used.
 
These follow common naming rules:
 

        firstName
        user_age
        totalPrice

These break one or more naming rules:

        1stName
        user age
        total-price
    



## Variable Naming Styles
### Camel Case: Used in JS
Example:

      firstName
      studentAge



### Pascal Case: Recommended in Js
Example:

      FirstName
      StudentAge


### Snake Case: Used in Python
Example:

      first_name
      student_age


## Summary

I learned that JavaScript variables are named containers used to store and manage data in a program. Variables can be declared using `let`, `const`, or `var`, with `let` allowing values to change and `const` being used for values that should remain constant. I also learned that variable names must follow specific rules: they can contain letters, numbers, underscores, and dollar signs, but they cannot start with a number, contain spaces, or use reserved keywords. Using meaningful names and consistent naming styles such as camelCase helps make code easier to read and maintain.

##  What Are Primitive Data Types?
In JavaScript, primitive values are immutable, which means their values cannot be changed directly after they are created.
Example:
 ### 1. Strings
 Represents text.  
 
    let str1='single quotes';
    let str2="double quotes";
    let str3=`this is backticks`;  
 ### 2.  Numbers
Represents integers and decimal numbers.

    let  number1=94;
    let  number3=-34.44;
    let  number3=-6.44;
    let  bigNumber=84848488848484849303844848933903484933;
  ### 3.  Boolean
   Represents logical values: `true` or `false`.

    let isMarried=true;
    let isUnderage=false;
### 4.  Undefined
   A variable that has been declared but not assigned a value.
   

    let score;
    console.log(score); //undefined    
### 5.  Null
Represents the intentional absence of a value.

    let  firstName  =  null;
 ### 6.  BigInt
  Represents very large integers beyond the safe limit of the `Number` type.  
 
       let bigNumber = 12345678901234567890n;   
