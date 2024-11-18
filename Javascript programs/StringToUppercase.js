//wap to convert the first letter of a string to uppercase 



function upper(string)
{
    var first = string.charAt(0)
    var upcase = first.toUpperCase()
    var rem = string.slice(1)
    var result = upcase + rem 
    console.log(result)
}

let value = "maidan"
upper(value)

