userName = "admin"; 
password = "1234"; 

myUsername = prompt("Type username HERE: "); 
myPassword = prompt("Type Password HERE: "); 

if (myUsername === userName && password === myPassword) {
    alert("Access Granted!");
} else {
    alert("Access Denied!"); 
}