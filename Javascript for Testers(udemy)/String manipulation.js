

let str = "hello world"

console.log(str.charAt(0));

console.log(str.length)


let str1 = "hello"
let str2 = 'hello'
let str3 = `hello`

console.log(str1 == str2)


// string comparsion 




// let filename = "invoice_123.pdf"

// if(filename === "invoice_123.pdf")
// {
//     console.log("filename matches")

// }


// full match 


let filename = "invoice_123.pdf"

if(filename.toUpperCase().trim() === "INVOICE_123.PDF")
{
    console.log("filename matches")


}

//partial match 



if(filename.startsWith("invoice"))
{
    console.log("filename matches")
}

if(filename.endsWith(".pdf"))
{
    console.log("yes it matches")
}
    

//Extract substring 


let dt = "2022-02-26"

let ddmmyy = dt.slice(2,6)

console.log(ddmmyy)

let year = dt.slice(0,4)
console.log(year)

let month = dt.slice(5,7)

console.log(month)


let day = dt.slice(-2)
console.log(day)



//replace


let newfilename = filename.replace(".pdf","")
console.log(newfilename)

let txtfile = filename.replace(".pdf","txt")
console.log(txtfile)



//split

let tstamp = "2022-02-26T10:51:52:2072"

let dtst = tstamp.split("T")
console.log(dtst)
console.log(dtst[0])

let str5 = "Hello world"

let arr = str5.split("d")

console.log(arr)



