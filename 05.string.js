const name ="Harshit"
const repoCount = 7

// console.log(name + repoCount + "value")//

//console.log (`Hello my Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshit-hs')

//console.log(gameName[6]);
//console.log(gameName.__proto__);



//console.log(gameName.length);
//console.log(gameName.trim());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringONE = "Harshit" 
console.log(newStringONE);
console.log(newStringONE.trim);

const url="https://harshit.com/harshit%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('harshit'))

console.log(gameName.split('-'))