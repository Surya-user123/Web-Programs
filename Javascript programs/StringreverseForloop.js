// wap a program to reverse a string using only for loop (traditional way)




function revStr(string)
{
    var strlen = string.length;
    var rev = ''
    for( var i = strlen-1;i>=0;i--)
    {
        rev = rev + string[i]
    }
    console.log(`${string} reverse is ${rev}`)
}

 let word  = "Coldplay"

 revStr(word)

