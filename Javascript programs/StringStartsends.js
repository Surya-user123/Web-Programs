//wap to check if a String Starts and Ends with Another Given String:

function checkStartAndEnd(mainStr, subStr) {
    if (mainStr.startsWith(subStr) && mainStr.endsWith(subStr)) {
        console.log(`The string "${mainStr}" starts and ends with "${subStr}".`);
    } else {
        console.log(`The string "${mainStr}" does not start and end with "${subStr}".`);
    }
}

// Example Usage:
let mainString = "helloWorldhello";
let subString = "hello";

checkStartAndEnd(mainString, subString);
