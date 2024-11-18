//wap to find factorial of a function using recursion


// The process in which a function calls itself directly or indiirectly is called recursion

// var fact = 1
// function factr(n)
// {
//     if(n > 5)
//     {
//         return
//     }
//     var tmp = fact
//     fact = fact * n
//     n++
//     factr(n)
// }
// factr(1)
// console.log(`The factorial of 5 is ${fact}`)


function factorial(n) { 
	if (n === 0 || n === 1) { 
		return 1; 
	} else { 
		return n * factorial(n - 1);  //Each time factorial(n - 1) is called, it invokes a new instance of the function with a smaller value of n, and it continues doing so until it hits the base case (n === 0 || n === 1).
	} 
} 
let num1 = 6; 
let result = factorial(num1); 
console.log("The factorial of given number is :" + result);

