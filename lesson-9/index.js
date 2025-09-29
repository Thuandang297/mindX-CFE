// Bài tập 1: Thêm thuộc tính mới vào đối tượng
//input: student = { name: "John", age: 20 },
const student = { name: "John", age: 20 }

//output: Thêm thuộc tính major
student.major = "Computer Science";

// console.log("student", student)
//Bài 2:Xoá thuộc tính trong đối tượng
//input :person = { name: "Alice", age: 25, job: "Designer" }
const person = { name: "Alice", age: 25, job: "Designer" };

delete person.job;

//output:{ name: "Alice", age: 25 } => Xoá thuộc tính job
// console.log('🚀 ~ person:', person)

//Bài 3:Đếm số lượng thuộc tính trong đối tượng
//input : car = { brand: "Toyota", model: "Camry", year: 2020 }
const car = { brand: "Toyota", model: "Camry", year: "2020" }
let count = 0;
for (let key in car) {
    count += 1;
}

//output: Số lượng thuộc tính của đối tượng car
// console.log("Số lượng thuộc tính là:", count)

//Bài 4: Chuyển đổi đối tượng thành mảng các cặp key-value
// input: product = { name: "Laptop", price: 1000 }

const product = { name: 'Laptop', price: 1000 }
const result = [];
let i = 0;
for (let key in product) {
    const valueOfKey = product[key];
    const item = [key, valueOfKey];
    result[i] = item;
    i += 1;
}

//output :[["name", "Laptop"], ["price", 1000]] => 
// console.log('🚀 ~ result:', result)

//Bài 5:Tìm kiếm đối tượng có name là "Camera" trong mảng sản phẩm
//input : products = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]

const products = [
    { name: "Phone", price: 500 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 }
]

for (let i = 0; i < products.length; i++) {
    const item = products[i];
    if (item.name === "Camera") {
        // console.log('Item camera::', item)
    }
}

//output :{ name: "Camera", price: 300 }

//Bài 6: products = [ { name: "Phone", price: 50 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]

const products6 = [
    { name: "Phone", price: 50 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 }
]

let newProducts6 = []

for (let i = 0; i < products6.length; i++) {
    const item = products6[i];
    if (item.price > 100) {
        newProducts6[newProducts6.length] = item;
    }
}
// console.log('newProducts6::', newProducts6)

//output :[ { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ] => danh sách sản phẩm có giá lớn hơn 100

// Bài 7:Cập nhật giá trị thuộc tính trong đối tượng
//input: person = { name: "Bob", age: 25, job: "Developer" },
const person7 = { name: "Bob", age: 25, job: "Developer" }

person7.age = 30;

console.log('🚀 ~ person7:', person7)
//output: { name: "Bob", age: 30, job: "Developer" }=> Cập nhật age 25=> 30;

//Bài 8: Gộp 2 đối tượng lại với nhau
// input:
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const result8 = {};

result8.a = obj1.a;
result8.b = obj1.b;
result8.c = obj2.c;
result8.d = obj2.d;
// console.log('🚀 ~ result8:', result8)

//Bài 9: 
//input:animal = { type: "Dog", name: "Buddy", age: 3 }
const animal = { type: "Dog", name: "Buddy", age: 3 }

for (let key in animal) {
    console.log(key + ':' + animal[key])
}
// Bài 10:
//car = { brand: "BMW", model: "X5" }
const car10 = { brand: "BMW", model: "X5" }
//Cách 1:
car10.color === undefined ? console.log('FALSE') : console.log('TRUE')

//Cách 2:
// let checkHaveColor = false;
// for (let key in car10) {
//     if (car10[key] === 'color') {
//         checkHaveColor = true;
//         break;
//     }
// }
// if (checkHaveColor === false) {
//     console.log("FALSE");
// }
// else {
//     console.log("TRUE")
// }
// console.log('🚀 ~ car10.color:', car10.color)




