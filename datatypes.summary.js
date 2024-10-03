// primitive  datatpes


/*basically there are 7 types of 
*/

 // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt;

 const score = 100
 const scorevalue = 100.3

 const isLoggedIn = false
 const outsideTemp = null 
 let userEmail;

 const id = Symbol('789')
 const anotherId = Symbol('789')
 
 console.log(id === anotherId);



 const Bignumber=7384374638277292018293792273937282837327n

 //Refrence datype (Non-primitive datatypes)

 // array,objects,functions 

 const heros= ["shaktiman","flying jatt","batman"];
 let myobj ={ 
     name: "Harshit",
     age: 21,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof Bignumb)
//typeof Operator Results

Undefined =	"undefined"
Null	= "object"
Boolean	= "boolean"
Number	= "number"
String	="string"
/*Object
(native and does not implement [[Call]])	="object"*/
/*Object
(native or host and does implement [[Call]]) ="function"*/
/*Object 
(host and does not implement [[Call]])	= Implementation-defined except may not be "undefined", "boolean", "number", or "string"*/



// https://262.ecma-international.org/5.1/#sec-11.4.3