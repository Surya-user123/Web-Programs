// wap to check occurance of a string word from a sentence 

// Define the sentence
const sentence = "day is funday";

// Define the search string
const searchString = "day";

// Initialize a counter for occurrences
let occurrenceCount = 0;

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
    // Check if the current character matches the first character of the search string
    if (sentence[i] === searchString[0]) {
        let match = true;
        // Loop through the characters of the search string to check for a complete match
        for (let j = 1; j < searchString.length; j++) {
            if (sentence[i + j] !== searchString[j]) {
                match = false;
                break;
            }
        }
        // If a complete match is found, increment the occurrence count
        if (match) {
            occurrenceCount++;
        }
    }
}

// Printing the result
console.log(`The string "${searchString}" occurs ${occurrenceCount} times in the sentence.`);
