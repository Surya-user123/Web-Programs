//objects

//object creation

// let obj = {
//     name: "Rob",
//     age:18,
//     isMarried:false
// }

// console.log(obj)
// console.log(obj.age)
// console.log(obj.isMarried)

//using constructor


function person(name,age,isMarried)
{
    this.name = name
    this.age = age
    this.isMarried = isMarried
    return `the name is:${this.name} and the age is ${this.age} and married status ${this.isMarried} `

}

let Obj = new person("Bob",38,true)


console.log(Obj)
console.log(Obj.name)




let obj = {
    name: "Rob",
    age:18,
    isMarried:false
}

let obj1 = Object.create(obj)
console.log(Object.getPrototypeOf(obj1))
console.log(obj1.name)
console.log(typeof obj1)



let testRunner = "local"
let machineID = ""
let envfile = "test_config"



let reportData = {
    testID: 12345,
    status:"PASS",
    "PASS/FAIL flag":"PASS",
    totalTest:100,
    totalPass:80,
    isInScope:true,
    passrate:()=>{
        return (this.totalPass/this.totalTest)*100
    },
    runDT:new Date(),
    runner:testRunner,
    macId:machineID?machineID:"unknown",
    [envfile]:{
        env:"test",
        url:"http://test.com"
    },
    scope:["smoke","reg","E2E"],
    previousRun:{
        status:"FAIL",
        runID:6789
    }
}

console.log(reportData.isInScope)
console.log(reportData.passrate())
console.log(reportData)
console.log(reportData.runner)



//access properties

let keys = Object.keys(reportData)
console.log(keys)
let val = Object.values(reportData)
console.log(val)

console.log(reportData.scope[1])
console.log(reportData.previousRun.status)

//object assignment 

reportData.status ="FAIL"
reportData.previousRun.status = "PASS"
let ebj = {}
ebj = reportData
console.log(ebj)

//iterate object properties and methods 

for(let key in reportData)
{
    console.log(reportData[key])
    console.log(`the key:${key} and the val:${JSON.stringify(reportData[key])}`)
}


