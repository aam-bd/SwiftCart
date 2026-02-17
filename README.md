# SwiftCart

1) What is the difference between null and undefined?
Null is an assignment value which is declared by the programmer. Null means empty or no value but it doesn’t throw value assignment to the variable related error.
let var = null;

Undefined is a scenario when a variable is declared but no value is assigned. For example, 
let var;
console.log(var);
Output: undefined
If a function is writer without return, the function return undefined by default.

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
map() creates a new array by calling the callback function for each element of the original array. However, it doesn’t modify the original array. 
forEach() calls a callback function for each element of the array but returns nothing (returns undefined). It works directly on the original array.

3) What is the difference between == and ===?
== checks whether the value is equal or no. If equal then returns true, else false.
5 == "5"; true
=== checks both the value and the data type equal and same at a time or not. If equal and same, then returns true, else false. 
5==="5"; false
Only, 5===5; true
4) What is the significance of async/await in fetching API data?
async/await is basically syntstic sugar built on top of promise. It enhances readability. When data is fetched, it awaits to come the next piece of data in the sequence based on previous request. 
5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Global scope: variables declared outside the function or block are globally scoped. These variables can be called anywhere in the code. 

Function scope:
Variables declared in any function are function scope. Function scope variables can be called within that function only. 

Block scope:
Variables declared in a block {} are called block scope. These variables can called just within the block. 