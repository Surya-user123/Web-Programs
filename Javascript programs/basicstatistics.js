/*Calculate basic statistics (total, max, min) using for loop and if else condition logics
Create an array called expenses that contains at least 5 different expense amounts.

Calculate the total expenses by summing all the elements of the array.

Find the highest and lowest individual expenses within the array.*/



let expenses = [100,200,300,400,500]
var sum = 0
var min = Infinity
var max = -Infinity
for(let i=0;i<expenses.length;i++)
{
    //console.log(expenses[i])
    if (expenses[i] < min)
    {
        min = expenses[i];
    }
    // Find maximum value
    if(expenses[i] > max)
    {
        max = expenses[i];
    }
    sum = sum + expenses[i]
}
console.log(sum)
console.log(min)
console.log(max)
