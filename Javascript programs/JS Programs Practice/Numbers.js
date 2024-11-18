// Here I will try to practice number related programs


// Add 

// function add(a,b)
// {
//     let sum = a + b
//     console.log(sum)

// }

// add(10,20)


//area of a triangle 

// let h = 10
// let b = 10
// let ar = (b*h)/2
// console.log(ar)


//area of regular traingle 
// let a = 2
// let b = 4
// let c = 4
// let s =(a+b+c)/2

// let trg = s*(s-a)*(s-b)*(s-c)
// let area = Math.sqrt(trg)
// console.log(area)

// factors of a number

// function factor(num)
// {
//     for(let i=0;i<num;i++)
//     {
//         if(num%i==0)
//         {
//             console.log(i)
//         }
//     }

// }

// factor(10)



// find the prime number 

// function primenum(num)
// {
//     if(num==1)
//     {
//         console.log(`${num} is neither prime nor composite`)
//     }
//     else if(num < 1)
//     {
//         console.log(`${num} cannot be negative`)

//     }
//     else
//     {
//         for(let i = 2;i<num;i++)
//         {
//             if(num%i==0)
//             {
//                 var res = `${num} is not a prime`
//                 break
//             }
//             else 
//             {
//                 var res = `${num} is a prime`

//             }
//         }
//         console.log(res)
//     }


// }

// primenum(7)

// function palin(num)
// {
//     let temp  = num
//     let rev = 0

//     while(temp>0)
//     {
//         let digit = temp %10
//         rev  = rev * 10 + digit
//         temp  = Math.floor(temp/10)
//     }
//     if (rev == num)
//     {
//         console.log(`${num} is palindrome`)
//     }
//     else
//     {
//         console.log(`${num} is not palindrome`)
//     }

// }

// palin(121)


// armstrong number 

// 153 is armstrong  number  as 1*1*1+5*5*5+3*3*3=153 

// function armstrong(num)
// {
//     let temp  = num
//     let sum = 0
//     let numOfDigits = num.toString().length

//     while(temp>0)
//     {
//         let digit = temp %10
//         sum = sum + digit ** numOfDigits 
//         temp  = Math.floor(temp/10)
//     }
//     if (sum == num)
//     {
//         console.log(`${num} is arm`)
//     }
//     else
//     {
//         console.log(`${num} is not arm`)
//     }

// }

// armstrong(153)


// factorial of a number

// function facto(num)
// {
//     let fact = 1
//     if(num == 0)
//     {
//         console.log(`the facorial of ${num} is 1 `)
//     }
//     else if(num < 0)
//     {
//         console.log(`the facorial of negative number is not possible `)
//     }
//     else
//     {
//         for(let i=1;i<=num;i++)
//         {
//             fact = fact*i
//         }
//         console.log(`the factorial of ${num} is ${fact} `)

//     }



// }

// facto(5)

// factorial using recursion

// function factorial(num)
// {
//     if(num==0||num==1)
//     {
//         return 1
//     }
//     else
//     {
//         return num * factorial(num-1)
//     }

// }
// let num = 5
// result = factorial(num)
// console.log(`the factorial is ${result}`)

// function samelast(a,b,c)
// {
//     let rem1 = a%10
//     let rem2 = b%10
//     let rem3 = c%10

//     if (rem1==rem2 && rem1 == rem3)
//     {
//         console.log(`The number ${a},${b} and ${c} has same last digit`)
//     }
//     else
//     {
//         console.log(`The number ${a},${b} and ${c} does not have same last digit`)

//     }


// }

// samelast(111,121,131)

// swap two numbers without using 3rd variable

// let a = 8
// let b = 4

// a = a + b 
// b = a - b
// a = a - b 

// console.log(`the value is a now is ${a} and b now is ${b}`)

//count characters in string

// function occur(string,len)
// {
//     let str = string.length
//     let count = 0
//     for(let i = 0;i<str;i++)
//     {
//         if(string[i]==len)
//         {
//             count = count + 1
//         }
//     }
//     console.log(`The count of ${len} in ${string} is ${count}`)


// }

// let word = "Environment"
// let char = "n"
// occur(word,char)

// sum and max min within an  array 

// let expenses = [100,200,300,400,500]

// let sum = 0

// let max =  -Infinity
// let min = Infinity

// for (let i = 0;i<expenses.length;i++)
// {
//     sum = sum + expenses[i]

//     if(expenses[i]<min)
//     {
//         min = expenses[i]
//     }
//     if(expenses[i]>max)
//     {
//         max = expenses[i]
//     }
// }

// console.log(min)
// console.log(max)
// console.log(sum)


// replace a char in string

// function replaceChar(string)
// {
//     var reg = new RegExp('red','gi')
//     var newstring = string.replace('red','blue')
//     console.log(newstring)

// }

// let char = "Mr Red has a red car and a red bike"

// replaceChar(char)



// palindrome string/reverse a string

// function palindromestring(string)
// {
//     let strarr = string.split('')
//     let revstr = strarr.reverse()
//     let result = revstr.join('')

//     if(result === string)
//     {
//         console.log(`${string} is palindrome`)
//     }
//     else
//     {
//         console.log(`${string} is not a a palindrome`)
//     }

// }
// let str =  "DAD"
// palindromestring(str)

//count no of vowels in a word 

// function vowels(string)
// {
//     let count= 0
//     for(let i = 0;i<string.length;i++)
//     {
//         if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u')
//         {
//             count = count + 1
//         }
//     }
//     console.log(`Count of vowels in ${string} is ${count}`)

// }

// let val = "Coldplay"
// vowels(val)



