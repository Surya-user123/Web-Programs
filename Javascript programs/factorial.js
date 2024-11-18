// WAP to find factorial of that number 


// factorial of a number is the product of all the numbers from 1 to that number 
// eg factorial of 5 is 1*2*3*4*5 = 120 


function factorial(num)
{
    var fact = 1
    if (num == 0)
    {
        console.log(`the factorial of ${num} is 1`)
    }
    else if(num < 0)
    {
        console.log('the factorial of negative number is not possible')
    }else {
        for(var i=1;i<=num;i++)
        {
            fact = fact*i
        }
        console.log(`the factorial of ${num} is ${fact}`)
    }
}

let facto = factorial(5)

