//object is a collection of properties

let person = {
    firstname: "Tim",
    lastname: "Joe",
    age: 21,  // added later
    fullname: function()    // added later
    {
        console.log(this.firstname+this.lastname)
    }
}
console.log(person.lastname)

console.log(person["lastname"])

person.firstname = "Tim Dane" // updating the value of the object key 
console.log(person.firstname)
person.gender = "male" // this property was not there earlier and added now 
console.log(person)

delete person.gender // deletes the speciic property 
console.log(person)

console.log("gender" in person) // will return true / false based on availability 

console.log(person.fullname())  // printing the function property

// print all the values of the javascript object 

for(let key in person) // will iterate through the object 
{
    console.log(person[key])
}
