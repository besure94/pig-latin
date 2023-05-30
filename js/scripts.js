const testString = "word squall quick green apple aardvark away!!!";

function removePunctuation(punctuationString) {
	return punctuationString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function convertToPigLatin(userInput) {
	const userInputWithoutPunctuation = removePunctuation(userInput);
	const userInputArray = userInputWithoutPunctuation.split(" ");
	const pigLatinArray = [];
	userInputArray.forEach(function(word) {
		// If words begins with vowel, add 'way' to the end.
		if (startsWithVowel(word)) {
			pigLatinArray.push(word + "way");
		} else {
			// If word begins with one or more consonants, move all of the first consecutive consonants to the end and add 'ay'.
			const consonantIndex = indexOfConsecutiveConsonants(word);
			let restOfWord = word.slice(consonantIndex);
			let consonantPairEnding = word.slice(0, consonantIndex) + "ay";
			pigLatinArray.push(restOfWord + consonantPairEnding);
		}
	});
	// Return all words in a sentence joined together from an array to a string.
	return pigLatinArray.join(" ");
}

function startsWithVowel(word) {
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];
	return vowelArray.includes(word[0]);
}

// This function provides the index so it can slice off the consonants of a word.
function indexOfConsecutiveConsonants(word) {
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];
	for (index = 0; index < word.length; index ++) {
		let currentLetter = word[index];
		if (vowelArray.includes(currentLetter)) {
			if (currentLetter === "u" && word[index -1] === "q") {
				// return consonant index including 'u' when it is 'qu'.
				return index +1;
			} else {
				return index;
			}
		}
	}
}

console.log("Convert to pig latin: ", convertToPigLatin(testString));