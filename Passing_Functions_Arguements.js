function greet(name){
    return "Hello " + name + "! "; 
    }

    function welcomeUser(func, userName){
        let userName = 'Alice'; 
        func(userName);
    }
    welcomeUser(greet); 
