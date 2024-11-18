//If condition


let popup = true

if (popup === true)
{
    console.log("perform click operation")
}

console.log("-------------------")


//If not 

//  let data

//  if(!data) throw Error (">>>No valid data found");


// console.log("-------------------")

// let daa = "pass"

// if(!daa) throw Error (">>>No valid data found");

// console.log("-------------------")

// let dee = ""


// if(!dee) throw Error (">>>No valid data found")



console.log("-------------------")

//if else 


let fileExists = "y"

if(fileExists === "y")
{
    console.log("read the file ")
}
else
{
    console.log("create the file")
}

console.log("-------------------")


//if-else-if

let err = "Assertion error"

if (err === "Error")
{
    console.log("retry")
}
else if(err === "Assertion error")
{
    console.log("fail the test")
}
else if (err === "data validation")
{
    console.log("read the data carefully")
}
else
{
    console.log("print the error message")
}

console.log("-------------------")


//if else (inner loop)



let issuccess = true
if (issuccess === true)
{
    console.log("storing the db value")
}
else
{
    console.log("no data recieved")
    let errcode ="accept"
    if (errcode === accept)
    {
        console.log("continue the execution")
    }
    else
    {
        console.log("fail the test")
    }
}

// using if in for loop 


for (let i = 0;i<=10;i++)
{
    if (i==6) break
    console.log(i)
}
console.log("after the condition is met")

console.log("-------------------")

//switch 

let browser = "chrome"

switch (browser)
{
    case "chrome":
    console.log("running chrome browser")
    break;
    
    case "firefox":
    console.log("running firefox browser")
    break;

    case "edge":
    console.log("running edge browser")
    break;

    default:
    console.log(`no valid browser: ${browser} is provided`)
    break;
}


