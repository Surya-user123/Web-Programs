// Array 

var score = [10,20,30,70,45,12,89]

console.log(score[4])

console.log(score.length)

score.push(14) //add element at the end 
console.log(score)

score.pop() // delete the last element 

console.log(score)

score.unshift(23)
console.log(score)


console.log(score.indexOf(12))
console.log(score.indexOf(120))


var sum = 0
for(let i=0;i<score.length;i++)
{
    //console.log(score[i]);
    sum = sum + score[i]
}
console.log(sum)

//console.log(score)

var marks = [12,13,14,16]

var evenmarks = []
for(let i=0;i<marks.length;i++)
{
    if(marks[i]%2==0)
    {
       evenmarks.push(marks[i])
    }
}
console.log(evenmarks)

// string


let take = "Environment"

console.log(take.length)

console.log(take.slice(0,5))

console.log(take[3])


you = take.split("o")
console.log(you[1].length)


// function 


function add(a,b)
{
    return a+b
}
let ola = add(8,4)
console.log(ola)


//anonymous function

let uber = function(c,d)
{
    return c*d
}

// arrow function concept

let extra = (l,p) => l*p
console.log(extra(5,4))

