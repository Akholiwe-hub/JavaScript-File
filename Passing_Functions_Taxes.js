function calculateTotal (price, taxRate) {
    let price; 
    let taxRate = price / (15/100); 
    let totalAmount = price + taxRate; 
    console.log(totalAmount); 
}

function myTotal(func, myTax) {
    myTax = 200; 
    func(myTax); 
    console.log(myTotal); 

}