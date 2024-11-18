// Assignement operator 

let start = 5
for(i=0;i<=5;i++)
{
    start+=i
    console.log(start)
}

console.log("----------------")
//arithmetic operator

// find remainder

let a = 5
console.log(5%2)

console.log("-------------------")

//increment or decrement 

for (let i=10;i>=1;i--)
{
    console.log(i)
}

console.log("-------------------")


//Unary plus

console.log("4"+4)

console.log(+"4"+4)


console.log("-------------------")

//comparison operator 

let b ="1"
let c = 1
console.log(b==c)
console.log(b===c)

// logical and 

let val = "Monday"
if(typeof val ==="string" && val.length>1)
{
    console.log(`Given value: ${val} is a valid string`)
}
else{
    console.log(`Given value: ${val} is an invalid string`)
}

console.log("-------------------")


//logical or


let day = "Monday"
if(day === "Sunday" || day === "Saturday")
{
    console.log(`Given day: ${day} is a weekend`)
}
else
{
    console.log(`Given day: ${day} is not a weekend`)
}

console.log("-------------------")



//not operator 

let firstname = "Rob"
let lastname = ""

if (!firstname || !lastname)
{
    console.log(`one of the name: ${firstname} or ${lastname}: not valid`)
}


console.log("-------------------")


//logical operator or default value

let targetbrowser
let browser = targetbrowser || "chrome"

console.log(browser)

console.log("-------------------")


let targetbr = "firefox"

let bro = targetbr || "Edge"

console.log(bro)

console.log("-------------------")


//ternary operator 

let runner = "local"

let loglevel = runner === "local" ? "Info" :"error"

console.log(loglevel)

console.log("-------------------")


let hover = "cloud"

let logger = hover === "loca" ? "Info" : hover == "cloud" ? "silent" : "mute"
console.log(logger)


console.log("-------------------")


