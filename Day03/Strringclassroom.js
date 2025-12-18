// 1. Create a variable originalWord
let originalWord = "madam";

// 2. Convert it to characters using split("")
let characters = originalWord.split("");
console.log("splitword is : ",characters)


// 3. Use a for loop from end to start to reverse and store it
let reversedWord = "";
for (let i = characters.length - 1; i >= 0; i--) {
    reversedWord += characters[i];
}

// 4. Print the reversed word
console.log("Reversed Word: " + reversedWord);

// 5 & 6. Use an if statement to compare both words and print result
if (originalWord === reversedWord) {
    console.log("It’s a palindrome!");
} else {
    console.log("Not a palindrome!");
}
/**
 * Note on the Hint: "Use switch(true) for range checks"
 * While not strictly needed for a simple palindrome check, 
 * you can use it to categorize the length of the word:
 */
switch (true) {
    case (originalWord.length === 0):
        console.log("The word is empty.");
        break;
    case (originalWord.length > 0):
        console.log("Word length is: " + originalWord.length);
        break;
}