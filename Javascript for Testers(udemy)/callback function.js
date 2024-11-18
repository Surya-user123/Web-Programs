//Robins phone 

orderPizza('Veg','Cheese Barbeque',function(msg){
    console.log(msg)
})

//pizzahub end 

function orderPizza(type,name,callback)
{
    console.log(`Pizza ${type} ${name} is ordered`)

    setTimeout(function food(){
        const msg = `pizza ${type} ${name} is ready`
        callback(msg)
    },3000)
}
