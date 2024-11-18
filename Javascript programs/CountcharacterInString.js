//wap to Find Number of Occurrences of a Character in the String


function Occurrences(String,letter)
{
    let strlen = String.length
    let count = 0
    for (let i=0; i< strlen;i++)
    {
        if(String[i] == letter)
        {
            count = count + 1
        }
    }
    console.log(`The occurance of ${letter} in ${String} is ${count}`)
}

let word = "everyday extra eve"
let charc = "e"

Occurrences(word,charc)

