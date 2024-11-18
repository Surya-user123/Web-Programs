//codeblock//

function add(a,b)
{
    return a+b
}
let sum = add(2,3)
console.log(sum)

//do not have name = Anonymous function => Function expression  shown below

let sumOfIntegers = function(c,d)
{
    return c+d
}


let sumOfNumbers = (c,d) => c+d   // function in one line 
console.log((sumOfNumbers(3,4)))

//scope level variable concept


//var keyword scope is at global level or functional level


var greet = "Evening" // var declared at global level this will print the console.log down successfully

if (1 == 1)  // if we add this line here also var still remains in the global level as no function is there here
{
    var greet = "afternoon" // now the older value is replaced by this one 
  
}

function jojo(x,y)
{
    var greet = "morning" // here var is inside the function scope and not inside the block scope
    return x*y
}
let mul = jojo(10,20)
console.log(mul)
console.log(greet)  //this will give me error as var will work only n function level if you come out of that it will fail
// here greet will print afternoon 



// let keyword scope 

// it is in the global level or block level {}



let greeto = "Evening" // let declared at global level this will print the console.log down successfully
greeto = "night" // both var and let can be reinitialized but const cant be reinitialized 

if (2 == 2)   
{
    let greeto = "afternoon" // let cannot be redeclared and let will not be visible outside of this block
  
}

function jomo(m,n)
{
    let greeto = "morning" // here let is used but it will not visible outside of this block
    return m*n
}
let mulo = jomo(20,20)
console.log(mulo)
console.log(greeto)  