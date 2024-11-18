let val = 0
val  = "ten"
console.log("the val: ", val)


//const 
const App_Url = "https://abc.com"
console.log(App_Url)

//scope

let count = 0

if(true)
{
    let count = 10
    console.log("The val is: ",count)
}
console.log("The val is: ",count)

// same code for const and same value
//---------------------------------------------------------------------------
var count1 = 0

if(true)
{
    var count1 = 10
    console.log("The val is:",count1)
}
console.log("The Val is:",count1)

//------------------------------------------------------------------------------------------


// literals and each type

let str = 'Hello'
let str1 = "Hello"
let str3 = `${str}, World` // not working
console.log(str3)

//regex(regular expression)

let re = /abc/


console.log(`The type of str is: ${typeof str}`);





