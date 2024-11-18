
//truth falsy or nullish values

let val = ""

if(val)
{
    console.log("condition met...")
}
else
{
    console.log(`Given ${val} is a falsy value...`)

}


let val1 = 5 + undefined
console.log(val1)

let val2 = 5 + null
console.log(val2)

// data type conversion

let value = "5"
let value1 = "5.5"

//numval = parseInt(value)
//numval1 = parseFloat(value1)

numval = +value
numval1 = +value1

console.log(`The type of numval: ${typeof numval},and the value is: ${numval}`)
console.log(`The type of numval1: ${typeof numval1},and the value is: ${numval1}`)


//convert to a string

let strval = numval.toString()
console.log(`The type of strval: ${typeof strval},and the value is: ${strval}`)





let a = 0

if (a) console.log("a is", a)

// let i
// for(i=0 ; i<3 ;i++)
// {
    
//   if(i == 2) break
// }    
// console.log(i)



// all primtive datatypes are immutable 

let day = "sunday"
console.log(day)

console.log(day.toUpperCase())
console.log(day)


