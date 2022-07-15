
//1st way
calculateFuitsCost = (fruitName, quantity) => {
    price = 30.00
    totalCost = `${quantity} ${fruitName} for ${price * quantity} KES`;
    return totalCost;
}

console.log(calculateFuitsCost("oranges", 20));


//2nd way
function calculateFuitsCost (fruitName, quantity){
price = 30.00

totalCost = `${quantity} ${fruitName} for ${price * quantity} KES`;
return totalCost;
}
console.log(calculateFuitsCost("oranges", 10));