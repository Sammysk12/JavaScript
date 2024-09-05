//Strings

let str = "Apna College";   //Both are valid
let str1 = 'Apna college';  


//Properties

//1. string length
//syntax str.length


let len = str.length;

console.log(len);





//Template Literals in JavaScript
let sentence =`This is a template literal which is special string`
console.log(typeof(sentence))


//Used for simplify the output strings

let obj = {
    item: "pen",
    price: 10,
}

let output =`The cost of ${obj.item} is ${obj.price} rs.`;
console.log(output)

//Sreing interpolation
//   'string text ${expression} string text`

//Escape characters
console.log("Hello,\nApna College \t Sammy \\")


//Methods in JavaScript


//Accessing position of characters
console.log("pos of C in apna college is "+ str.indexOf("C"))

//knowing character at index
console.log("At index 5 character is "+ str.charAt(5))

//Convert to upper case
//It do not changes original value it returns new value in upper case
console.log( str.toUpperCase())


//Remove empty(spaces) in strings
console.log( str.trim())

//replace the string value
console.log(str.replace("e", "a"));

//slicing the string
let nums = "0123456"
console.log(str.slice(4,8))


//Concat the strings
let strr1 = "Apna ";
let strr2 = "College ";

console.log(strr1.concat(strr2))

//append the value
let word = "hello";

word.replace("h", "y");

color = word.replace("", "w")

console.log(color)
