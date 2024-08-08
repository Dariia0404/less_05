
function reverseString(str) {
    let array = str.split('');
    let reversedArray = array.reverse();
    let reversedString = reversedArray.join('');

    return reversedString;
}
console.log(reverseString('hello'));


/*
function isPalindrome(str){
    return str.split('').reverse().join('') == str;
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


