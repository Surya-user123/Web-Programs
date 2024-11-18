// if you want to access any property of a class you need to create object and then acces the values

class Person
{
    age = 60
    //location = "Canada"  --> to declare in one way
    get location()    //another and more preferred and also when get keyword we call as properties not method
    {
        return "Canada"
    }
    // constructor is a method which executes by default when you create an object of the classes
    constructor(firstName,lastName) // these two instance variables wil catch the name from below object 
    {
        this.firstName = firstName // here the left side firstname is a variable will be accessed from entire class but right side firstname is the same instance used in the constructor method. the constructor variables can only be used within that method not outside that method to simplyfy this using that "this" keyword and the variable
        this.lastName = lastName  // same logic here 
    }
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }


 






}
let person = new Person("Tim","Joseph") //created an object of that class
let person1 = new Person("Chris","Jones") // created another object   
console.log(person.age)  // now able to access
console.log(person.location)
console.log(person.fullName()) // calling the fullname method 
console.log(person1.fullName())