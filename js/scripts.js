const testString = "quick green apple aardvark away!!!";
// const newString = testString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

function removePunctuation(punctuationString) {
	// console.log(punctuationString);
	return punctuationString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function pigLatin(userInput) {
	const userInputWithoutPunctuation = removePunctuation(userInput);
	if (userInputWithoutPunctuation.includes(" ")) {
		// User input has multiple words //
		const userInputArray = userInputWithoutPunctuation.split(" ");
		const pigLatinArray = [];
		userInputArray.forEach(function(word) {
			if (startsWithVowel(word)) {
				pigLatinArray.push(word + "way");
			} else {
				if (checkForConsecutiveConsonants || word.slice(0, 2) === "qu") {
					let consonantPairEnding = word.slice(0, 2) + "ay";
					let restOfWord = word.slice(2);
					pigLatinArray.push(restOfWord + consonantPairEnding);
				}
			}
		});
		return pigLatinArray.join(" ");

	} else {
		// User input is only one word //
		if (startsWithVowel(userInputWithoutPunctuation)) {
			// Does start with a vowel
			return userInputWithoutPunctuation + "way";
		} else {
			return userInputWithoutPunctuation;
		}
	}
	return userInputWithoutPunctuation;
}
// console.log("New string: ", removePunctuation(testString));
console.log("Pig Latin: ", pigLatin(testString));

const vowelString = "apple";
const nonVowelString = "yes";

function startsWithVowel(word) {
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];
	return vowelArray.includes(word[0]);
}

function checkForConsecutiveConsonants(word) {
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];
	if (!vowelArray.includes(word[0]) && !vowelArray.includes(word[1])) {
		return true;
	} else {
		return false;
	}
}