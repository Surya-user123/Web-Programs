//Inheritance is the main pillar in object oriented programming 
//one class can inherit/accquire the properties,methods of another class
//The class which inhertis the properties of other class is called sub class (derived class,child class)
//The class whose properties are inherited are called super class 

class Pet // parent class
{
    age = 10
    get location()
    {
        return 'bluecross'
    }
    constructor(firstName,lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }
}
class Dog extends Pet // child class 
{
    get location() // using this to override or change the parent getter used 
    {
        return "redcross" // if we comment out this getter then parent getter will be printed
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor  always 
        super(firstName,lastName)
    }


}
let dog = new Dog("Sam","San")
dog.fullName()
console.log(dog.location)
