## Pig Latin

By Brian Scherner

#### An application that takes words and applies the rules of Pig Latin to them.

## Technologies Used

* HTML
* JavaScript
* Markdown

## Description

This application allows users to input words, which are then converted into Pig Latin phrases. Words beginning with a vowel will have "way" added to the end. Words beginning with one or more consonants will have the consonants moved to the end, followed by "ay". Words beginning with "q" and "u" will be moved to the end of the word, followed by "ay".

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the js/scripts.js file in the directory.
* Open js/scripts.js file in your browser.

## Known Bugs

The application currently does not have a user interface. I plan to add a user interface later.

## License

MIT

Copyright (c) 2023 Brian Scherner

### Tests

pigLatin plan:
1. Take in user string.
2. Remove punctuation from string.
3. Split string into array of words.
4. Loop through each word.
5. Check whether each word starts with vowel or not. If word starts with vowel, add 'way' to the end of word.
6. Check whether each words starts with one or more consecutive consonants. Move all of the first consecutive consonants to the end and add 'ay'.
7. Check whether the first consonants include 'qu', move the 'q' and 'u' to the end and add 'ay'.
8. Return pig latin phrase.



Describe: removePunctuation()

Test: "It will remove any punctuation from user entered string."
Code:
const punctuationString = ("away!!!");
removePunctuation(punctuationString);
Expected Output: "away";

Describe: startsWithVowel()

Test: "It returns 'true' if the word starts with the vowels 'a', 'e', 'i', 'o', and 'u'."
Code: startsWithVowel("apple");
Expected Output: "true";
Code: startsWithVowel("yes");
Expected Output: "false";

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("away");
Expected Output: "awayway";

Test: "It will add 'ay' to the end of words that begin with one or more consecutive consonants."
Code: pigLatin("code");
Expected Output: "odecay"

Test: "It will add the consonants 'q' and 'u' to the end of words that begin with 'qu'."
Code: pigLatin("quick");
Expected Output: "ickquay";

Test: "It will add 'way' to the end of every word in a string that begins with a vowel."
Code: pigLatin("away energy igloo over under");
Expected Output: "awayway energyway iglooway overway underway";

Test: "It will add 'ay' to the end of every word in a string that begins with one or more consecutive consonants."
Code: pigLatin("code dog jacket hello kerosene mother");
Expected Output: "odecay ogday acketjay ellohay erosenekay othermay";

Test: "It will add the consonants 'q' and 'u' to the end of every word in a string that begins with 'qu'."
Code: pigLatin("quickly quadrant quilt quiz quake quite");
Expected Output: "icklyquay adrantquay iltquay izquay akequay itequay";