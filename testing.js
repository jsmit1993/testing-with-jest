function capitalL(word) {
    const submitted = word;
    let newWord = submitted.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
}

function reverseString(word) {
    let submitted = word;
    let reverse = submitted.split('').reverse().join('');
    return reverse;
}

function sum(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiple(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function ceasarCiphere(word, number) {
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let UpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    shiftDegree(number);
    let splitWord = submittedWord(word);
    let alphaArray = [];
    for (let i = 0; i < word.length; i++) {

    }


}

function shiftDegree(number1) {
    let num = number1;
    if (num > 26) {
        let actualShift = num - 26;
        return actualShift;
    }
}

function submittedWord(word1) {
    let newArray = [];
    let word = word1;
    let splitWord = word.split('');
    newArray.push(splitWord);
    return newArray;
}


module.exports = {sum, capitalL, reverseString, subtract, multiple, divide, ceasarCiphere };