/*Manipulate an array of strings (add, remove, sort)
Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array.*/


let studentNames = ["Ajay","David","Vivek","Vijay"]

let add = studentNames.unshift("Ram")
console.log(studentNames)

let remove = studentNames.pop()
console.log(studentNames)

let sort = studentNames.sort()
console.log(studentNames)


//[ 'Ram', 'Ajay', 'David', 'Vivek' ]


