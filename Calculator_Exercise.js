let number1 = prompt("Please add your first number: "); 
let symbol1 = prompt("Add: *, +, -, /"); 
let number2 = prompt("Please add second number: ")

if (number1 || number2 != Number){
    console.log(alert("Invalid input"))
}

let equation = number1 && symbol1 && number2; 
console.log(alert(equation)); 

