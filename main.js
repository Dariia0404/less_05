
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('Привіт'));

/*
function isPalindrome(str) {
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char !== ' ') {
            cleanedStr += char;
        }
    }
    let reversedStr = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }
    return cleanedStr === reversedStr;
}


let string = prompt("Введіть рядок для перевірки на паліндром:");
if (isPalindrome(string)) {
    console.log("Рядок є паліндромом.");
} else {
    console.log("Рядок не є паліндромом.");
}
*/

/*

function findGCD(a, b) {
    while (b !== 0) {
        let number = b;
        b = a % b;
        a = number;
    }
    return a;
}
let num1 = 10;
let num2 = 12;
console.log(`НСД чисел ${num1} і ${num2} = ${findGCD(num1, num2)}`);
*/