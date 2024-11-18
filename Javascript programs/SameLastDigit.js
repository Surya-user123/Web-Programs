//WAP to check if the numbers have the same last digit 


function lastdigit(a,b,c)
{
    var rem1 = a % 10
    var rem2 = b % 10
    var rem3 = c % 10 

    if (rem1 === rem2 && rem1 === rem3)
    {
        console.log(`${a},${b},${c} have the same last digit`)
    }else
    {
        console.log(`${a},${b},${c} does not have the same last digit`)
    }

}

lastdigit(15,25,115)



