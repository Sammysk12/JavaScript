let arr1 =[
"Tony" , "Captain", "Thor" , "Hulk"

];

//array methods

//prints the array
console.log(arr1);

//returns the length of arrays
console.log(arr1.length);

//returns type of array which is object
console.log(typeof(arr1));

//reverses the arrray
// arr1 =arr1.reverse();
console.log(arr1);


//Array indices
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);



//Looping over the array

for(let val of arr1){
    console.log(val)
}

let numPlate =[3223, 9779, 4296, 7485];

console.log("");
console.log("Advanced Forloop");

for(let val of numPlate){
    console.log(val)
}

console.log("");

console.log("Normal  for loop")
for(let i=0 ; i<numPlate.length; i++){
    console.log(numPlate[i]);
}
