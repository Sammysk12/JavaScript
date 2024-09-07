//Q1 

let marks = [65,97,44,37,76,60];
let sum=0;
let avg=0;

for(let val of marks){
    sum+= marks;
    avg= sum/marks.length;
}
console.log(avg);



//Q2
let items = [250,645,300,900,50];
discountPrice = 0;

for(let val of items){
 console.log(`The orginal price is ${val}`)
}

for(let i=0; i<items.length; i++){
    
    discountPrice=(items[i]*(10/100));
    items[i] = items[i]-discountPrice;
}

console.log("");

for(let val of items){
    console.log(`The final price with 10% discount is ${val}`);

}


//Q3

let companies =["Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"]
console.log(companies);


companies.shift();
console.log(companies);

companies.splice(1,1,"Ola")
console.log(companies)


companies.push("Amazon")
console.log(companies)