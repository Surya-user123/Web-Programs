//WAP to find palindrome string 
// A string is a palindrome if read same from both forward and backward 
//eg "DAD" "MADAM"

function palindromeString(val)
{
    var ValArray = val.split('') // breaks the string into array
    var valReverse = ValArray.reverse() // reverse the given string
    var result = valReverse.join('') // combines the array elements in one string 

    if(val === result)
    {
        console.log(`${val} is a Palindrome `)
    }else
    {
        console.log(`${val} is not a Palindrome`)
    }

}
let str = 'MADAM'
palindromeString(str)


// we can use this same code to find palindrome number only thing to do is 
//convert the number to .tostring() method and continue the code 

// use this same code to find reverse of a string 



