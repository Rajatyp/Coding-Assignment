const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(reverseWord);
    return reversedWords.join(' ');
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

rl.question('Enter a sentence: ', (inputSentence) => {
    const reversedSentence = reverseWordsInSentence(inputSentence);
    console.log('Reversed Sentence:', reversedSentence);
    rl.close();
});
