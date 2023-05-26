pigLatin plan:
1. Take in user string.
2. Remove punctuation from string.
3. Split string into array of words.
4. Loop through each word.
5. Check whether each word starts with vowel or not. If word starts with vowel, add 'way' to the end of word.
**6. Check whether each words starts with one or more consecutive consonants. Move all of the first consecutive consonants to the end and add 'ay'.**
	* Fix logic on lines 19-23.
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