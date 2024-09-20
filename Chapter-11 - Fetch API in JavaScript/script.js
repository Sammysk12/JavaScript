// console.log("Hello");
// console.log("Hello 2");
// setTimeout(() => {
//     console.log("Hello 3")
// }, 3000);
// console.log("Hello 4");



// //callbacks

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallBack){
//     sumCallBack(a,b);
// }

// calculator(1,3, sum);



//proper and correct way to write callback function in Asynchronous programming
// function getData(dataId, getNextData){
//     setTimeout(() =>{
//         console.log(`data = ${dataId}`);
//         if(getNextData){
//             getNextData();
//         }
//     }, 1000);
// }



// //callback hell
// //it is callback nesting (pyramid structure in callbacks) thats why it is difficult
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4);
//         });
//     });
// })


// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a Promise");
//     // resolve("Success");
//     reject("Error");
// })


// function getData(dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data", dataId),
//             resolve("Success");
//         10000});
        

//     })
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log(`Iam a promise`)
//         // resolve("Success");
//         reject("Failed")
//     });
// };

// let promise = getPromise();

// promise.then((res) =>{
//     console.log(`Logged in successfully ! ${res}`);
// })

// promise.catch((err) => {
//     console.log("Network Error !", err)
// })


//promise chaining

// function asyncFunc(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("Some Data!");
//             resolve("Success!");
//         }, 2000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("Some Data!");
//             resolve("Success!");
//         }, 2000);
//     });
// }


// let p1 = asyncFunc();
// p1.then((res) => {
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log("Sucess !")
//     }); 
// });



// function getData(dataId){
//   return new Promise((reslove, reject) =>{
//       setTimeout(() => {
//         console.log(`data = ${dataId}`);
//         reslove("Success");
//       }, 3000);  
//     });
// }



// //This is the actual promise chaining
// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) =>{
//     return getData(3);
// })
// .then((res) =>{
//     console.log(res);
// });



//aync await

//async functiopn 

async function myFunc(params) {
  console.log("Hello!"); 
}

//await keyword

// await pauses the execution of its async function until the promise is settled


function getData(dataId){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
          console.log(`data = ${dataId}`);
          reslove("Success");
        }, 3000);  
      });
  }


// async function getAllData(params) {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }


//IIFE: Immediately Invoked Function Expression
// Immediately invoking function without calling it 
// One time use only

(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})();
