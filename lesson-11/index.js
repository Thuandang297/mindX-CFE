// // Các phương thức cơ bản của một mảng
// const array = [2, 3, 4, 5, 6];

// // Add a new item in the last of array
// array.push(...[33, 44, 55]);
// array.push(12);
// console.log("🚀 ~ array:", array)

// //Delete in last index 
// array.pop();
// console.log("🚀 ~ array:", array)

// //Sử dụng splice
// array.slice(0, 4, 5, 6);
// console.log("🚀 ~ array:", array)
// /*Các phương thức của object
// +Object.keys.
// +Object.values.
// +Object.assign.
// */

// const object = {
//     name: "Dang Ngoc Thuan",
//     class: "10A5",
//     age: 25,
//     country: "Viet Nam",
// }

// Object.keys(object)
// console.log("🚀 ~ Object.keys(object):", Object.keys(object))

// Object.values(object)
// console.log("🚀 ~ Object.values(object):", Object.values(object))

// const newObject = Object.assign({ position: "Student" }, object)
// console.log("🚀 ~ Object.assign({},object);:", newObject);

// //Kiểu dữ liệu nguyên thủy: truyền tham trị
// let halo = "hello";
// const halo_b = halo;
// halo_b.replace('h','o');
// console.log("🚀 ~ halo:", halo)


// //Kiểu dữ liệu phức: truyền tham chiếu
// let a = [1, 2, 3];
// console.log("🚀 ~ a:", a)
// let b = [...a];
// b.push(45)
// console.log("🚀 ~ a:", a)

//Chữa bài tập:
//Bài 1:
//Input: names = ["John", "Alice"];
const names = ["John", "Alice"];

console.log("🚀 ~ Mảng names trước khi push:", names);

names.push("Tom");

console.log("🚀 ~ Mảng names sau khi push:", names);

//Bài 2:
//Input: [1, 2, 3, 4] =>[1^2,2^2,3^2,4^2] => [1,4,9,16];

const input2 = [1, 2, 3, 4];
//B1: 1 => return 1^2 = 1;
//B2: 2=> return 2^2 = 4;
//B3: 3 => return 3^2 = 9;
//B4: 4 => return 4^2 = 16;

const result2 = input2.map(item => Math.pow(item, 2));

//Output: Lấy ra mảng mới là mảng chứa các giá trị bình phương của mảng ban đầu
console.log("🚀 ~ result2:", result2);

//Bài 3:
//Input  :[5, 10, 15, 20, 25] 

const input3 = [5, 10, 15, 20, 25];

//Cách 1: Sử dụng function
const result3 = input3.filter(function (currentValue) {
    if (currentValue % 2 === 0) {
        return currentValue;
    }
})
//Cách 2: Sử dụng arrow function
const result3_arrowfn = input3.filter((currentValue) => currentValue % 2 === 0)

//Output: Lọc ra các số chẵn trong mảng = [10,20]
console.log("🚀 ~ result3_arrowfn:", result3_arrowfn)
console.log("🚀 ~ result3:", result3)

//Bài 4:
//Input: [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }]

const input4 = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];

//Cách 1: Sử dụng function
const result4 = input4.find(function (student) {
    if (student.score >= 8) {
        return student;
    }
})
//Cách 2: Arrow function 
const result4_arrowFn = input4.find(student => student.score >= 8);
//Out: Tìm ra học sinh đầu tiên có điểm lớn hơn hoặc bằng 8
console.log("🚀 ~ result4:", result4)
console.log("🚀 ~ result4_arrowFn:", result4_arrowFn)

//Bài 5:
//Input :[3, 5, 8, 12, 15]

const input5 = [3, 5, 8, 12, 15];

const result5 = input5.findIndex(currentValue => currentValue > 4);

//Output: Lấy ra chỉ số của phần tử đầu tiên lớn hơn 10 trong mảng
console.log("🚀 ~ result5:", result5)

//Bai 6:
//input: ['a', 'b', 'c', 'd', 'e']
const input6 = ['a', 'b', 'c', 'd', 'e'];
//1.Thêm 'f' vào sau 'c'
input6.splice(3, 0, 'f');
//2.Xóa 'd'
input6.splice(4, 1)

console.log("🚀 ~ input6:", input6)

//Output: Thêm 'f' vào sau 'c' và xóa 'd' ['a', 'b', 'c', 'f', 'e']

//Bài 7:
//input:{ name: 'Tom', age: 21, major: 'Computer Science' }
const object7 = { name: 'Tom', age: 21, major: 'Computer Science' }
const result7 = Object.keys(object7)
console.log("🚀 ~ keysObject:", result7)


//Bài 8:
const result8 = Object.values(object7)
console.log("🚀 ~ result8:", result8)

//Output: Lấy ra mảng các key của đối tượng


//Bài 9:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const result9 = Object.assign(obj1, obj2);

console.log("🚀 ~ result9:", result9)

//Ouput:{ a: 1, b: 2, c: 3, d: 4 }
//Bài 10:
//Input: [1, 2, 3]


const input10 = [1, 2, 3];

const result10 = [...input10, 4];
console.log("🚀 ~ result10:", result10)


//Output :Thêm số 4 vào cuối mảng [1, 2, 3, 4]









