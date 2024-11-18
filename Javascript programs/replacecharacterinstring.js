// wap to replace a character inside a string in javascript 


function replaceChar(string)
{
    var reg = new RegExp('red','gi')
    var newstring = string.replace(reg,'blue')
    console.log(newstring)

}

let char = "Mr Red has a red car and a red bike"

replaceChar(char)

