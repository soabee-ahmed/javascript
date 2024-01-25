//LECTURE =>24 
//IIFE=>Immediately Invoked Function Expressions(IIFE)

(function chai(){                 //NAMED IIFE
    console.log(`DB CONNECTED`);
})();                               //this will work same as chai() ()() first pair of braces denotes to chai definition and second pair of braces points to the braces after the name of the function during function call

((name)=>{                 //UNNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("soabee")           //For executing second IIFE must place semicolon after first IIFE if we don't place the semicolon after first IIFE than compiler do not execute second IIFE and throw error
