
// WAP to check largest number among three numbers given 


function Largest(a,b,c)
{
    if(a >= b && a >= c)
    {
        console.log(`${a} is the largest number`)     
    }else if(b >=a && b>=c)
    {
        console.log(`${b} is the largest number`)
    }else
    {
        console.log(`${c} is the largest number`)
    }

}

largestNumber = Largest(10,20,30)

