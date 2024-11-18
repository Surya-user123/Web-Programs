// wap to sort the words in alphabetical order 

function alpha(string)
{
let  words = string.split(" ");  // Split into words by spaces
let arrangedString = words.sort();  // Sort the array alphabetically
let sortedSentence = arrangedString.join(" ");  // Join the words back into a string
console.log(sortedSentence);

}

let sentence  = "this is a testing string"

alpha(sentence)
