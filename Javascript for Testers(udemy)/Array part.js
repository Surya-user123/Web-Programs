// let arr = [1,2,3]

// console.log(arr.push(4))
// console.log(arr)
// console.log(arr[2])

let arr = []

arr[4] = "kiwi"
console.log(arr)

console.log(`total element: ${arr.length}`)


let count  = 0
for (let i=0;i<arr.length;i++) 
{
    if(arr[i])
    {
        count++
    }
}

console.log(`total count : ${count}`)

// array and object 


let book  = [
{
    category: "reference",
    author: "Nigel rege",
    title: "sayings of the century",
    price: 8.95
},
{
    category: "fiction",
    author: "Evelyn Waugh",
    title: "Sword of Honor",
    price: 12.99,
},
{
    category: "fiction",
    author: "Harman Melvice",
    title: "Moby Dick",
    price: 8.99,
}]



let priceArr = []
for(let j=0;j<book.length;j++)
{
    let price = book[j].price
    priceArr.push(price)
}
console.log(priceArr)


//spread operator for merging

let brr1 = ["apple","orange","banana"]
let brr2 = ["choco","biscuit","cake"]

let brr = [...brr1,...brr2]
console.log(brr)

//map

let givenBrr = ["123","456","25","566"]

let modifiedBrr = givenBrr.map(ele => parseInt(ele))
console.log(modifiedBrr)

//filter 


let res = book.filter(ele => ele.price < 9)
console.log(res)





