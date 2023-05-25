const punctuationString = ("away!!!");
const newString = punctuationString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

function removePunctuation(punctuationString) {
	return punctuationString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}
console.log("New string: ", removePunctuation(punctuationString));

