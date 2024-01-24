const name="soabee"
const repocount="100"
console.log(`My name is ${name.toUpperCase()} and repocount is ${repocount.toString()}`)

const gameName=new String("hiteshhc")
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.charCodeAt(3));
console.log(gameName.indexOf('t'));
console.log(gameName.lastIndexOf('h'));
console.log(gameName.includes('hc'));
console.log(gameName[0]);

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4 valueof() method converts string objects to its primitives

const newstring=gameName.substring(1,4);  //ite
console.log(newstring);
//difference between substring and slice is that substring take positive arguments only but slice can take negative also.
const string1=gameName.slice(-7,4)
console.log(string1);
const s3=new String("  soabee   ")
console.log(s3.trim())                 //trim all trailing whitespaces

const s4="hit-esh-hc"
console.log(s4.split('-'));