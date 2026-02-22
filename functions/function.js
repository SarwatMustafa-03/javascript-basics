function addtwonum(num1, num2) {
    console.log(num1 + num2)
}
addtwonum(5, 3)


function isEven(num) {
    if (num % 2 === 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}
isEven(7)


function greet(name) {
    console.log(`"hello = ${name} !"`)
}
greet("Ali")


function saquare(value) {
    console.log(value * value)

}
saquare(5)


function findMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1}is the largest number`)
        if (num2 > num1 && num2 > num3) {
            console.log(`${num2}is the largest number`)

        }
        if (num3 > num1 && num3 > num2) {
            console.log(`${num3}is the largest number`)

        }
    }
}
findMax(10, 20, 15)



//function countVowels(string){
// const vowels = ['j','a','v','a','s','c','r','i','p','t'] 

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(5))




function isPalindrome(str) {
    if (str === "madam") {
        console.log("true")
    }
    else {
        console.log("false")
    }
}
isPalindrome("ali")


function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(num1 + num2)
        case "-":
            console.log(num1 - num2)
        case "*":
            console.log(num1 * num2)
        case "/":
            console.log(num1 / num2)
    }
}
calculator(3,5,"*")