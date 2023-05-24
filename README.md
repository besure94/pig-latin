Describe: pigLatin()

Test: "It will remove any punctuation from user entered string."
Code: pigLatin("away!");
Expected Output: "away";

Test: "It will not consider 'y' as a vowel."
Code: pigLatin("yes");
Expected Output: "yes";

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("away");
Expected Output: "awayway";

Test: "It will add 'ay' to the end of words that begin with one or more consecutive consonants."
Code: pigLatin("code");
Expected Output: "odecay"

Test: "It will add the consonants 'q' and 'u' to the end of words that begin with 'qu'."
Code: pigLatin("quick");
Expected Output: "ickquay";

Test: "It will add 'way' to the end of every word in a sentence that begins with a vowel."
Code: pigLatin("away energy igloo over under");
Expected Output: "awayway energyway iglooway overway underway";

Test: "It will add 'ay' to the end of every word in a sentence that begins with one or more consecutive consonants."
Code: pigLatin("code dog jacket hello kerosene mother");
Expected Output: "odecay ogday acketjay ellohay erosenekay othermay";

Test: "It will add the consonants 'q' and 'u' to the end of every word in a sentence that begins with 'qu'."
Code: pigLatin("quickly quadrant quilt quiz quake quite");
Expected Output: "icklyquay adrantquay iltquay izquay akequay itequay";