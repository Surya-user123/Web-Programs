// function 


function addTwoNum (num1,num2)
{
    let sum = num1+num2
    return sum
}

//function calling

// let total  = addTwoNum("five","five")
// console.log(total)



// let total  = addTwoNum(5)
// console.log(total)

let total = addTwoNum(5,5,5)
console.log(total)



//anonymous function 

let sumfn = function add(val1,val2)
{
    let value = val1 + val2
    return value
}

console.log(sumfn(4,4))



//rest parameter and argument object 

function same(sim1,sim2,...simN)
{
    let total = 0
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[2])
    for(let i=0;i<arguments.length;i++)
    {
        total = total + arguments[i]
    }
    return total
}

let joke = same(2,5,2,4)
console.log(joke)

//self invoking function 

{function addTweNum (nume1,nume2)
{
    let sume = nume1+nume2
    console.log(sume)
    return sume
}}(2,2)



