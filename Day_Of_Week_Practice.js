let DayChoice = Number(prompt("Please choose day number. ie: 1 = Monday")); 
let result; 
switch(DayChoice){
    case 1: 
    result = "Monday"; 
    break; 

    case 2: 
    result = "Tuesday"; 
    break; 

    case 3:
        result = "Wednesday"; 
        break; 

    case 4:
        result = "Thursday"; 
        break; 

    case 5:
        result = "Friday"; 
        break; 
    
    case 6: 
        result = "Saturday"; 
        break; 
    
    case 7: 
        result = "Sunday"; 
        break; 
    
    default: 
        result = "Invalid input. Please enter number between 1 - 7";
}
alert(result); //Make sure this is at the bottom to print out the final result. 
//And also use defaults to deal with errors with users. 