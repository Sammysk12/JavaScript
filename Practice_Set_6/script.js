//Q1

let count =0;

function countVowels(str){ 
    
    for(i=0; i<str.length; i++){
        if(str[i]=="A"||str[i]=="a"||str[i]=="E"||str[i]=="e"||str[i]=="I"||str[i]=="i"||str[i]=="O"||str[i]=="o"||str[i]=="U"||str[i]=="u"){
            count++;
        }

}

    console.log(`${count} vowels are in the string`)
}





countVowels("Hello, Name is Sammy!")

let countVos =0;

const countVows =(str) =>{ 
    
    for(i=0; i<str.length; i++){
        if(str[i]=="A"||str[i]=="a"||str[i]=="E"||str[i]=="e"||str[i]=="I"||str[i]=="i"||str[i]=="O"||str[i]=="o"||str[i]=="U"||str[i]=="u"){
            countVos++;
        }

}

    console.log(`${countVos} vowels are in the string`)
}


let str1 = "Hello! How are you?"

countVows(str1)



//Q2


let nums =[1,2,3,4,5,6,7,8,9]

let calSquare = (nums) =>{
    let square = nums*nums;

    console.log(square); 
}


nums.forEach(calSquare);



//Q3

let marksosStudents =[87,92,99,86,90]


//1. Marks should be greater than 90
let higherMarks = marksosStudents.filter((val) =>{
        return val >=90 ;
})

console.log(higherMarks)


//Q4 
let n = prompt("Enter a number: ");

let arr =[];

for(let i=1; i<=n; i++){
    arr[i-1]= i;  //index 0: 1 index 1: 2......upto index[n-1]: n
}

console.log(arr);


// Q5
let sumOfArray = arr.reduce((sum, val)=>{
    return sum+val;
})

console.log(`Sum is ${sumOfArray}`)

// Q6
let factorial = arr.reduce((fact, val)=>{
    return fact*val;
})

console.log(`Factorial is ${factorial}`)
