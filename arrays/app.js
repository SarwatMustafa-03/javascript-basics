//push add item at the end of the array//
const nweNumber = [1, 2, 3]
nweNumber.push(4)
console.log(nweNumber)


//pop remove item at the end of the array//
const newNumber = [1, 2, 3, 4]
newNumber.pop()
console.log(newNumber)

//unshift add item at the beginning of the array//
const number = [1, 2, 3, 4]
number.unshift(10)
console.log(number)

//shift remove item from the begining of the array//
const num1 = [9, 1, 2, 3, 4]
num1.shift()
console.log(num1)

//join convert array to string//
const num2 = ['a', 'b', 'c']
num2.join()
console.log(num2)

//concat merge two or more arrays and declare and new array//
const num3 = [1, 2]
const num4 = [3, 4]
const num5 = num3.concat(num4)


//spread operator merge two or more arrays and declare and new array//
const num6 = [...num3, ...num4]
console.log(num6)

//flat method to flatten nested arrays//
const nestedArray = [1, 2, [3, 4, [5, 5]]]
const arrangeArray = nestedArray.flat(3)
console.log(arrangeArray)

//slice 
const prevNum = [10, 20, 30, 40, 50]
const newNum = prevNum.slice(1, 3)
console.log(newNum)


//splice use to add or remove item through index,here we remove 30//
const num7 = [10, 20, 30, 40]
const result = num7.splice(2, 1) // Remove 1 item starting from index 2 (i.e., remove 30)
console.log(result)



//includes check if an array contains a specific element and returns true or false//
const fruits = ['apple', 'banana', 'orange']
const hasApple=fruits.includes('apple')
console.log(hasApple)




let users = ["Ali", "Sara", "Ahmed"];
users.splice(1, 0, "Hina");// Add "Hina" at index 1 without removing any element
console.log(users)

//array.from() create a new array from an array-like or iterable object//
const string = "backend"
const arr=Array.from(string)
console.log (arr)


const num8 = [1, 2, 3, 4, 5]
const arr1=Array.from(num8, x => x * 2) // Create a new array with each element multiplied by 2
console.log(arr1)





const values=[1,5,2,5,3,5]
const removeValue=values.splice(5,3)// Remove 3 items starting from index 5 (i.e., remove the value 5 at index 5)
console.log(removeValue)