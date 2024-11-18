// wap to find factors of a number 

// the factor of a number means the factor should exatly divide the number with remainder zero 

function factors(number)
{
    for(let i=0;i<number;i++)
    {
        if(number%i==0)
        {
            console.log(i)
        }

    }
}

factors(12)

