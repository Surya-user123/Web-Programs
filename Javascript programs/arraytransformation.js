/*Apply transformations and calculations to array elements, and filter elements 
based on a condition
You have an array called productPrices with various product prices.

Apply a 10% discount to all prices using the map method and store the results in a new 
array called discountedPrices.

Use the filter method to create a new array called affordableProducts containing only
 products priced below $50

Calculate the total cost of all items in the affordableProducts array using the reduce method.*/


let productPrices = [20,40,80,100,120,150]

let discountedPrices = productPrices.map(productPrices => productPrices - (productPrices * 0.10));  // Subtracting 10% of the price;


console.log(discountedPrices)

let affordableProducts = productPrices.filter(productPrices => productPrices < 50)

console.log(affordableProducts)

let totalCost = affordableProducts.reduce((sum,price)=>sum+price,0)

console.log(totalCost)


