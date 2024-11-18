
// let keyword can only be reinitialised and cant be redeclared but var can be done both 
// const keyword cant be used one value is set to it 

let a = 70
console.log(a)
console.log(typeof(a))

a = 20
console.log(a)
a = 30
console.log(a)

let u = "umbrella" 
console.log(typeof(u))

let b = true
console.log(b)
console.log(typeof(b))
console.log(!b)

var ana = "howdy"
console.log(ana)

var ana = "rowdy"
console.log(ana)

ana = 70
console.log(ana)


const ls = 45.425
console.log(ls)

//ls = "try" // throws error 
console.log(ls)


// If else 

const game = "GTA"
if(game == "NFS")
{
    let speed = "velocity"
    console.log("condition is not ok")
    console.log(speed)
}
else
{
    console.log(game)
    console.log("condition is ok")
    //console.log(speed)
}

// while loop 
let i = 0
while(i<5)
{
    i++
    console.log(i)
}
//1 2  3 4 5  this the sequence the code will get executed entering the loop


// while loop with using if and break condition 

var j = 10
while(j>5)
{
    j++
    console.log(j)
    if(j==15)
    {
        console.log("stop here")
        break
    }
}

// do while 
let e = 0
do
{
    e++
}while(e<10)
console.log(e)

// for loop 

for(let k=0;k<5;k++)
{
    console.log(k+1)
}
 console.log("#########")


