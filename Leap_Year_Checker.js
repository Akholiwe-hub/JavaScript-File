year = Number(prompt("Enter a year, See if it's a leap year: ")); 

if ((year / 100)%400 == 0){  //Will fix this leap year calculation
    alert("Yes, this a leap year");
} else {
    alert("Not a leap year."); 
}
