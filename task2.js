//  Write a function that uses recursion to calculate the factorial of a number.

let temp = 1;

let fact = (n) => {
    if (!isNaN(n)) {
        if (n > 0) {
            temp *= n;
            n--;
            fact(n);
        }
        
        return temp;
    } 
    
    else
        console.log("Not a number!");
}
