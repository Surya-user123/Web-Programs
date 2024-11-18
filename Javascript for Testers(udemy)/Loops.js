// for (let i=0;i<10;i++)
// {
//     console.log(i)
// }




//advance use cases of for loop 


let arr = ["Apple",10,"orange",20,"grapes",30]

let sum = 0
for (let i=0;i<arr.length;i++)
{
    let arrEle = arr[i]
    
    if(typeof arrEle === "number")
    {
        sum += arrEle
    }
}
console.log(`the sum is: ${sum}`)


//use of break statement 



let windows = ["google","amazon","youtube"]

for (let j=0;j<windows.length;j++)
{
    let win = windows[j]
    if (win === "amazon")
    {
        break
    }
    console.log(win)
}




//for each 


let winner = ["goog","amaz","you"]

winner.forEach((val,index,arr) => {
    console.log(val)
    console.log(index)
    console.log(arr)
})




//for in loop 


let obj = {
    a:10,
    b:20,
    c:30
}


for (let key in obj){
    console.log(key)
    console.log(obj[key])
}




