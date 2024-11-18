const flag = true

/*if (flag)
{
    console.log("condition satisfied")
}
else
{
    console.log("condition not satisfied")
}*/

if (!flag)
{
    console.log("condition satisfied")
}
else
{
    console.log(flag) //this means that the flag variable doesnt change  only we use a not in if condition
    console.log("condition not satisfied")
}


//while loop

let i = 0
while(i<5)
{
    i++
    console.log(i)
}

do
{
    i++
}while(i<10);
console.log(i)

// for loop basic

console.log("**********")

for(let k=0;k<10;k++)
{
    console.log(k)
}
 console.log("#########")
//increment: This is the expression that determines how the loop variable changes after each iteration. It's executed after each iteration of the loop, just before the condition is re-evaluated.


//from  1 to 10 give me common multiples of 2 and 5

for(let j=1;j<=10;j++)
{
    if(j%2 == 0 && j%5 == 0)
    {
        console.log(j)
    }
}
console.log("$$$$$$$$$$$$")

//give me common multiple numbers of 2 and 5 but I need first 3 numbers
let n = 0
for(let l=1;l<=100;l++)
{
    if(l%2 == 0 && l%5 == 0)
    {
        n++
        console.log(l)
        if(n==3)
        break
    }
}
