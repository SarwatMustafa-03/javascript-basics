const user = {
  name: "Ali",
  age: 22,
  isAdmin: false
}
user.age = 23;
user.email = "ali@example.com"
delete user.isAdmin;
console.log(user)



const product = {
  id: 101,
  title: "Laptop",
  price: 50000
}

console.log(product.price? product.price : "Price not available");
console.log(product.discount? product.discount : "Discount not available");

console.log(Object.keys(product.price))
console.log(Object.values(product.title))
console.log(Object.entries(product))



const student = {
  name: "Sara",
  marks: 85,
  grade: "A"
}

const studentCopy = JSON.parse(JSON.stringify(student));
console.log(studentCopy)


const users = {
  name: "Ahmed",
  address: {
    city: "Karachi",
    zip: 74000
  }
}
users.zip=12345;
users.country="Pakistan";
console.log(users.address.city)


const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

console.log(Object.assign({}, obj1, obj2))
const obj3 = {...obj1, ...obj2}
console.log(obj3)