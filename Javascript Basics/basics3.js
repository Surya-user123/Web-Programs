// Array

var marks = [10,50,60,70,45,100]
submarks = marks.slice(2,5)
console.log(submarks)

console.log(marks[2])
marks[3] = 14
console.log(marks)
console.log(marks.length)

marks.push(48) //to append an element at the end 

console.log(marks)
marks.pop() //delete the last element from the array

console.log(marks)

marks.unshift(12) //will insert element at the beginning of the array 
console.log(marks)

console.log(marks.indexOf(100))

console.log(marks.includes(120))


//iterating over the array and also find sum of the elemets in array
var sum = 0
for(let i=0;i<marks.length;i++)
{
    //console.log(marks[i]);
    sum = sum + marks[i]
}
console.log(sum)

console.log(marks)

//reduce filter map 

let total = marks.reduce((sum,mark)=>sum+mark,0) //this funtion will perform the same operation like before loop here sum is variable will start from 0 and mark will give each element of the array 
console.log(total) //if you want to sum or multiply use this reduce it will be faster

//create new array with even numbers of scores array 

var scores = [12,13,14,16]

var evenscores = []
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
       evenscores.push(scores[i])
    }
}
console.log(evenscores)

//filter method shortcut

let newFilterEvenScore = scores.filter(scores=>scores%2==0) // will check the even number in the array and will store in the new variable declared
console.log(newFilterEvenScore)

//when you need to iterate every time then use reduce method 
//when you need to filter the array based on the logic/condition say even/odd then use filter

//now multiply the filtered array with 3 

//map method 

let mappedArray = newFilterEvenScore.map(score=>score*3)
console.log(mappedArray)

let totalval = mappedArray.reduce((sum,val)=>sum+val,0) //here sum the mapped array elements
console.log(totalval)

var scores1 = [10,12,18,45]

//will chain the method shortcuts to perform the same operation in one line 

let sumvalue1 = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumvalue1)


// sort an array containing strings

let fruits = ["banana","guava","apple","orange"]

fruits.sort() // will sort the values of the array 
console.log(fruits)
fruits.reverse()
console.log(fruits)

//sort an  array containing numbers 

var check = [10,20,40,3,50]
check.sort((a,b)=>a-b) // although vscode is not allowing to enter 003 but to understand here it will do combinations and check for value having lowest difference so that way it will sort (bubble sort) 
//check.sort()
console.log(check) //in case you want the reverse here type b-a


