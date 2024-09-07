let arr1 =[
"Tony" , "Captain", "Thor" , "Hulk"

];

//array properties

//prints the array
console.log(arr1);

//returns the length of arrays
console.log(arr1.length);

//returns type of array which is object
console.log(typeof(arr1));



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



//Array methods
//reverses the arrray
// arr1 =arr1.reverse();
console.log(arr1);

let foodItems=["Potato", "Panner", "Popcorn", "Poo", "Pasta", "Pear", "Panckaes"];

for(let val of foodItems){
    console.log(val)

};
console.log("");


//Adds new item to last
let addItem = foodItems.push("Pizza");

for(let val of foodItems){
    console.log(val)
    
};

console.log(addItem+" Added in the list");



//Removes last element from the array
let removeItem= foodItems.pop();

for(let val of foodItems){
    console.log(val)
    
};

console.log(removeItem+" removed from the list");

//Change array to string
let foods = foodItems.toString();

console.log(foods);


//concat 2 arrays

let marvelHeros=["Spidy", "Tony", "Cap", "Hulk"];

let dcHeros =["SupaMaaan", "Baatmaaan", "WondaUUmen", "Flaaashy"];

console.log(marvelHeros);
console.log(dcHeros);

//Concats 2 arrays
let superHeros= marvelHeros.concat(dcHeros);

console.log(superHeros);


//Unshift => Adds to start

marvelHeros.unshift("Bucky");

console.log(marvelHeros);


//shift => delete or removes from start
marvelHeros.shift("Bucky");

console.log(marvelHeros);


//slice = Slices the array and it doesnt change the orignal array
let marv= marvelHeros.slice(0,2);

console.log(marv);


//splice = change the orignal array (add, remove, replace)
let marvel= marvelHeros.splice(0,1,'wonda');

console.log(marvel);



