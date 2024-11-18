// promise 



// let proObj = new Promise((resolve,reject)=>{
//     console.log("Executing the promise")
//     setTimeout(()=>{
//         resolve("Promise is resolved")
//     },2000)
// })

// //consuming the promise

// proObj.then((res)=>{
//     console.log(res)
// })

//using reject 

let preObj = new Promise((resol,rejec)=>{
    console.log("Executing the promise")
    setTimeout(()=>{
        rejec("Error occured")
    },2000)
})

//consuming promise

preObj.catch((rest)=>{
    console.log(rest)
})

// conditional block 


let proObj = new Promise((resolve,reject)=>{
    console.log("Executing the promise")
    if(1<100)
    {
        setTimeout(()=>{
        resolve("Promise is resolved")
        },2000)
    }else{
        reject("Error occurred")
    }
})
    

//consuming the promise

proObj.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

//async

async function getData(){
    try{
        let res = await proObj
        console.log(res)
    }catch(Error){
        console.log(Error)
    }
}




