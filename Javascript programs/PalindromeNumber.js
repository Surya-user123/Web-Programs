// wap to find a number is palindrome or not 


function PalindromeNumber(num)
{
    var temp = num 
    var reversenum = 0
    

    while(temp > 0)
    {
        var digit  = temp % 10  // gives only remainder
        reversenum = reversenum * 10 + digit
        temp = Math.floor(temp/10) //rounds off to the nearest integer or takes value before decimal
    }
    //console.log(reversenum)
    if (num === reversenum )
    {
        console.log(`${num} is a Palindrome number`)
    }else{
        console.log(`${num} is not a palindrome number`)
    }

}


let use = PalindromeNumber(434)

// use this same code to find reverse of a number 

