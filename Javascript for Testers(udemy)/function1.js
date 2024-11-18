//Arrow function 


let sum = (num1,num2) => 
{
    let sum = num1+num2 
    return sum
}

let total = sum(2,2)
console.log(total)

//no param 

let arrowFn = () => 10>5
let res = arrowFn()
console.log(res)


//single param 

let greet = name => 
console.log(`hello,${name}`)
greet('Rob')

// what is a callback function ?


function a() {
    console.log("this is a function a")
}

function b() {
    setTimeout(() => {
    console.log("this is function b")
    },2000)
}

function c() {
    console.log("this is function c")
}

a()
b()
c()



//callback function 

function printMsg(msg)
{
    console.log(`calling the callback function..`)
    console.log(msg)
}

function greeto(name,greeter)
{
    console.log(`calling the main function`)
    let greetMsg = `Hello,${name}`
    greeter(greetMsg)
    //console.log(greetMsg)
}

// calling

//greeto("Rob",printMsg)

greeto("Rob",(val)=>{
    console.log(`the recieved value from main function: ${val}`)
})


//return statement in callback function 


// function printMsg(msg)
// {
//     console.log(`calling the callback function..`)
//     console.log(msg)
// }

// function greeto(name,greeter)
// {
//     console.log(`calling the main function`)
//     let greetMsg = `Hello,${name}`
//     return greeter(greetMsg)
//     //console.log(greetMsg)
// }

// // calling

// let reso = greeto("Rob",(val)=>{
//     console.log(`the recieved value from main function: ${val}`)
// })
// console.log(reso)

