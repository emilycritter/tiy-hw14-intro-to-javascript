//Turn a sentence into an Array, and select the words that are six characters long.
var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";
var words = sentence.replace(/\./g, "");
words = words.split(" ");
console.log(words);

function checkSixChars(word) {
  if(word.length === 6){
    return true;
  } else {
    return false;
  }
}

var sixCharWords = words.filter(checkSixChars);
sixCharWords = sixCharWords.length;
console.log("There are " + sixCharWords + " words with six characters.");
