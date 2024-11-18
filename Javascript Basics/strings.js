// Strings and its methods in Javascript 

let day = "tuesday "
console.log(day.length)

let subday = day.slice(0,4)
console.log(subday)

console.log(day[1])

let splitday = day.split("s") // will split s and return tue and day as two arrays
console.log(splitday[1])
console.log(splitday[1].length)
console.log(splitday[1].trim().length)

//we cannot differentiate or perform operation with string values for that we need to convert them to integer

let date = "23"
let nextdate = "27"
let diff = parseInt(nextdate) - parseInt(date)
console.log(diff)
let rev = diff.toString()
console.log(rev)

//string concatenation 

let newQuote = day+ "is Funday"
console.log(newQuote)
let value = newQuote.indexOf("day",5) // searching day from 5th index and then it will find the next day
console.log(value)

// Wap to check the occurance of "day" in the string newQuote 

let count = 0
let val = newQuote.indexOf("day")
while(val!==-1) //if it cannot find day it gives -1
{
    count++
    val = newQuote.indexOf("day",val+1)
}
console.log(count)


