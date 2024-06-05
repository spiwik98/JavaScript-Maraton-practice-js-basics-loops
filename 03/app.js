const x = 10;
let iteration = 0;
let randomNumber = -1;
let randomNumber = Math.round(Math.random() * 11); 

console.log(randomNumber);
while (randomNumber !== x) {
    iteration = iteration + 1;
    randomNumber = Math.round(Math.random() * 11); 
    console.log(`Iteration: ${iteration}, Random Number: ${randomNumber}`);
}

console.log(`It took ${iteration} iterations to generate the number ${x}.`);