//Prime number

// is a number which is divisible by 1 and the number itself example 2,3,5,7 etc

function FindPrime(num)
{
    if(num == 1)
        {
            console.log(`${num} is neither prime nor composite`)
        }else if(num < 1)
        {
            console.log(`${num} is not a prime number `)
        }else 
        {
            for(var i = 2;i < num;i++)
            {
                if(num % i == 0)
                {
                    var res = `${num} is not a prime number`
                    break
                }else
                {
                    var res = `${num} is a prime number`
                }
            }
            console.log(res)
        }

}

let prime = FindPrime(13)

//Easiest prime number logic ever seen 

