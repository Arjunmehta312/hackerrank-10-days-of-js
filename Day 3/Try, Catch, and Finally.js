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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        // Try to reverse the string
        s = s.split('').reverse().join('');
    } catch (error) {
        // Print the error message if an exception occurs
        console.log(error.message);
    }
    // Print the result (either the reversed string or the original input if an error occurred)
    console.log(s);
    
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}