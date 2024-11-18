// wao to find number 0f vowels in the string 


// Regex is known as regular expression 
// It is used to match test and find characters from a string 

// function Vowels(string)
// {
//     const reg = /[aeiou]/gi
//     var chars  = string.match(reg)
//     console.log(chars.join(','))
//     console.log(chars.length)
// }

//  let word  = "Coldplay fun"

//  Vowels(word)

//gi  means g means global throughout the string and i is case insensitive uppercase or lower case

function vowels(string)
{
    let count= 0
    for(let i = 0;i<string.length;i++)
    {
        if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u')
        {
            count = count + 1
        }
    }
    console.log(`Count of vowels in ${string} is ${count}`)

}

let val = "Coldplay"
vowels(val)

