//wap to find armstrong number 

/* Armstrong is a number that is equal to the sum of its own digits, each raised to 
the power of the number of digits.

153 is an Armstrong number because: 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153 

9474 is an armstrong number because : 9*9*9*9 + 4*4*4*4 + 7*7*7*7 + 4*4*4*4 = 9474 */



function Armstrong(num)
{
    var temp = num 
    var sum = 0
    var numOfDigits = num.toString().length

    while(temp > 0)
    {
        var digit  = temp % 10  // gives only remainder
        sum = sum + digit ** numOfDigits
        temp = Math.floor(temp/10) //rounds off to the nearest integer or takes value before decimal
    }
    if (sum === num)
    {
        console.log(`${num} is an Armstrong number`)
    }else{
        console.log(`${num} is not an Armstrong number`)
    }

}


let use = Armstrong(153)


