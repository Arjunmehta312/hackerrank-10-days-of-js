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

function getLetter(s) {
    let letter;

    // Get the first character of the string
    const firstChar = s.charAt(0);
    
    // Determine the letter based on the first character
    if ('aeiou'.includes(firstChar)) {
        letter = 'A';
    } else if ('bcdfg'.includes(firstChar)) {
        letter = 'B';
    } else if ('hjklm'.includes(firstChar)) {
        letter = 'C';
    } else if ('npqrstvwxyz'.includes(firstChar)) {
        letter = 'D';
    }

    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}