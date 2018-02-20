//  Write a function that checks whether a number is prime.

let primeCheck = (n) => {
    let check = true;
    let newNums = [];

    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            check = false;
            newNums.push(i);
        }
    }

    return (check === true ? `${n} je primarni broj` : `${n} nije primarni broj, djeljiv je sa ${newNums}`)
}
