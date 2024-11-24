'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {

    const PI = Math.PI; // Declare PI as a constant with the value of Math.PI
    const r = parseFloat(readLine()); // Read the radius and parse it as a floating-point number
    
    // Calculate the area and perimeter
    const area = PI * r * r;
    const perimeter = 2 * PI * r;
    
    // Print the results
    console.log(area);
    console.log(perimeter);


    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}