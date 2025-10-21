userGrade = Number(prompt("Please enter your grade: ")); 

if (userGrade >= 80 && userGrade <= 100) {
    console.log("Grade - A"); 
} else if (userGrade >= 70) {
    console.log("Grade - B");
} else if (userGrade >= 60) {
    console.log("Grade - C");
} else if (userGrade >= 50) {
    console.log ("Grade - D");
} else {
    console.log("Below 50 -> Fail"); 
}