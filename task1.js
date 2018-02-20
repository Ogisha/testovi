/* 

Write a program that outputs numbers from 1 to 100, each on its own line, but:
Instead of each number that is divisible by 3, the program outputs Dev
Instead of each number that is divisible by 5, the program outputs Ops
Instead of each number that is divisible by both 3 and 5, the program outputs DevOps

*/

let devOps = () => {
    for (var i = 1; i <= 100; i++) {
        if ((i %5 === 0) && (i % 3 === 0))
            console.log("DevOps");
        else if (i % 3 === 0)
            console.log("Dev");
        else if (i % 5 === 0)
            console.log("Ops");
        else
            console.log(i);
    }
}
