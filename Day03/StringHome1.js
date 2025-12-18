// 1. Declare a variable and assign a sentence
let sentence = "The clever fox is not so clever as it think, but the clever bird is really clever";

// 2. Declare another variable and assign the word to search
let searchWord = "clever";

// 3. Split the sentence into words using a space delimiter
let words = sentence.split(" ");

// 4. Use a counter variable to track occurrences
let count = 0;

// 5. Use a loop to compare each word with the search word
for (let i = 0; i < words.length; i++) {
    // Check if the current word matches the search word exactly
    if (words[i] === searchWord) {
        count++;
    }
}

// 6. Print the number of occurrences
console.log("The word '" + searchWord + "' appeared " + count + " times.");