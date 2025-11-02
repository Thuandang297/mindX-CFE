

//Chữa bài tập:
//Bài 1:
//Input: names = ["John", "Alice"];
const names = ["John", "Alice"];

// console.log("🚀 ~ Mảng names trước khi push:", names);

names.push("Tom");
// names.push("Jerry");
// names.push("Mary");

// console.log("🚀 ~ Mảng names sau khi push:", names);

//Bài 2:
//Input: [1, 2, 3, 4] =>[1^2,2^2,3^2,4^2] => [1,4,9,16];

const input2 = [1, 2, 3, 4];
//B1: 1 => return 1^2 = 1;
//B2: 2=> return 2^2 = 4;
//B3: 3 => return 3^2 = 9;
//B4: 4 => return 4^2 = 16;


const result2 = input2.map(item => Math.pow(item, 2));

function binhPhuong(item, index, array) {
    return Math.pow(item, 2)
}
const result2_ex = input2.map(binhPhuong);


//Output: [1^2, 2^2, 3^2, 4^2]; Lấy ra mảng mới là mảng chứa các giá trị bình phương của mảng ban đầu
// console.log("🚀 ~ result2:", result2_ex);

//Bài 3:Sử dụng filter() để lọc ra các số chẵn trong mảng.
//Input  :[5, 10, 15, 20, 25] 

const input3 = [5, 10, 15, 20, 25];
//console.log("🚀 ~ Bài số 3:", input3)

//Cách 1: Sử dụng function
const result3 = input3.filter(function (currentValue) {
    if (currentValue % 2 === 0) {
        return currentValue;
    }
})

const test3 = input3.filter(item => item > 15);

//Cách 2: Sử dụng arrow function
const result3_arrowfn = input3.filter(currentValue => currentValue % 2 === 0)

//Output: Lọc ra các số chẵn trong mảng = [10,20]
//console.log("🚀 ~ result3_arrowfn:", result3_arrowfn)
//console.log("🚀 ~ result3:", result3)

//Bài 4:Sử dụng find() để tìm sinh viên đầu tiên có điểm số lớn hơn hoặc bằng 8 trong một mảng đối tượng sinh viên.
//Input: [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }]

const input4 = [
    { name: 'John', score: 7 },
    { name: 'Tom', score: 8 },
    { name: 'Alice', score: 9 },
];

//Cách 1: Sử dụng function
const result4 = input4.find(function (student) {
    if (student.score >= 8) {
        return student;
    }
})
//Cách 2: Arrow function 
const result4_arrowFn = input4.find(student => student.score >= 8);

//Out: Tìm ra học sinh đầu tiên có điểm lớn hơn hoặc bằng 8
// console.log("🚀 ~ result4:", result4)
// console.log("🚀 ~ result4_arrowFn:", result4_arrowFn)

//Bài 5:
//Input :[3, 5, 8, 12, 15]

const input5 = [3, 5, 8, 12, 15];

const result5 = input5.findIndex(currentValue => currentValue > 10);

//Output: Lấy ra chỉ số của phần tử đầu tiên lớn hơn 10 trong mảng
// console.log("🚀 ~ result5:", result5)

//Bai 6:Sử dụng splice() để thêm, xóa, và thay thế phần tử trong mảng. Thêm 'f' vào sau 'c' và xóa 'd'.
//input: ['a', 'b', 'c', 'd', 'e']
const input6 = ['a', 'b', 'c', 'd', 'e'];
//1.Thêm 'f' vào sau 'c'
// input6.splice(3, 0, 'f');
//2.Xóa 'd'
input6.splice(4, 1)

//Output: Thêm 'f' vào sau 'c' và xóa 'd' ['a', 'b', 'c', 'f', 'e']

//Bài 7: Sử dụng Object.keys() để lấy danh sách tất cả các key trong một đối tượng.
//input:{ name: 'Tom', age: 21, major: 'Computer Science' }
const object7 = { name: 'Tom', age: 21, major: 'Computer Science' }
console.log("🚀 ~ List key of object:", Object.keys(object7))

//Bài 8:Sử dụng Object.values() để lấy danh sách tất cả các value trong một đối tượng
console.log("🚀 ~ List values of object:", Object.values(object7))
//Output: Lấy ra mảng các key của đối tượng

//Bài 9:Sử dụng Object.assign() để gộp hai đối tượng thành một đối tượng mới.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 7 };
const obj4 = { g: 8, h: 9 };

const result9 = Object.assign(obj1, obj2, obj3, obj4);

// console.log("🚀 ~ result9:", result9)

//Ouput:{ a: 1, b: 2, c: 3, d: 4 }
//Bài 10:Sử dụng spread operator để tạo ra một mảng mới chứa các phần tử của mảng ban đầu và thêm số 4 vào cuối.
//Input: [1, 2, 3]

const input10 = [1, 2, 3];

const result10 = [...input10, 4];
// console.log("🚀 ~ result10:", result10)
//console.log("🚀 ~ result10:", result10)

//Bài 11:Sử dụng spread operator để tạo ra một đối tượng mới chứa tất cả các thuộc tính của đối tượng ban đầu và thêm một thuộc tính mới.
// Input: { name: 'Alice', age: 25 } và { job: 'Developer' }

const object_1 = { name: 'Alice', age: 25 };
const object_2 = { job: 'Developer' };
const object_3 = { male: 'Male' };

const result_11 = { ...object_1, ...object_2, address: "21B Baker Street", phone: "0123456789", ...object_3 };
console.log("🚀 ~ result_11:", result_11)


//Output :Thêm số 4 vào cuối mảng [1, 2, 3, 4]

// Bài 12: Sử dụng map() để tạo một mảng mới chứa các tên viết hoa từ mảng các tên viết thường.

// Input: ['john', 'alice', 'tom']

const input_12 = ['john', 'alice', 'tom'];

const result_12 = input_12.map(item => item.toUpperCase())

// const result_test = result_12.map(item => item.toLowerCase())

console.log("🚀 ~ result_12:", result_12)

// Output: ['JOHN', 'ALICE', 'TOM']

// Bài 13:Sử dụng filter() để lọc các số chẵn và dùng reduce() để tính tổng các số chẵn này.
//Input: [1, 2, 3, 4, 5, 6]
const list_number = [1, 2, 3, 4, 5, 6]
const listSoChan = list_number.filter(item => item % 2 == 0);
console.log("🚀 ~ listSoChan:", listSoChan)

// const tongSoChan = listSoChan.reduce((prev, currentVal) => (prev += currentVal));

const tongSoChan_test = listSoChan.reduce((prev, currentVal, currIndex, array) => {
    console.log("🚀 ~ array:", array)
    console.log("🚀 ~ currIndex:", currIndex)
    console.log("🚀 ~ currentVal:", currentVal)
    console.log("🚀 ~ prev:", prev)
    console.log("🚀 ~ prev += currentVal:", prev + currentVal)
    console.log("------")
    return prev += currentVal
});

//console.log("🚀 ~ tongSoChan:", tongSoChan)

// Ouput: 12=> Tổng các số chẵn

//Bài 14:Xóa các phần tử trùng lặp trong mảng và tạo ra một mảng mới chỉ chứa các phần tử duy nhất

//Input: [1, 2, 2, 3, 4, 4, 5]
const input_14 = [1, 2, 2, 3, 4, 4, 5]

const result_14 = input_14.reduce((prevArray, currentVal) => {
    if (!prevArray.includes(currentVal)) {
        prevArray.push(currentVal);
    }
    return prevArray;
}, [])

const check = [1, 2, 3].includes(5)
console.log("🚀 ~ [1,2,3].includes(2):", check)
console.log("🚀 ~ result_14:", result_14)
//Output: [1, 2, 3, 4, 5]

//Bài 15:Đếm số lần xuất hiện của mỗi phần tử trong mảng và trả về một đối tượng

const input_15 = ['a', 'b', 'a', 'c', 'b', 'a'];
const result_15 = input_15.reduce((accumulator, currentVal) => {
    //Nếu phần tử đã tồn tại trong accumulator thì tăng giá trị lên 1
    if (accumulator[currentVal]) {
        accumulator[currentVal] += 1;
    }
    //Không thì gán giá trị ban đầu là 1
    else {
        accumulator[currentVal] = 1;
    }
    return accumulator;
}, {})
console.log("🚀 ~ input_15:", result_15)
//{ a: 3, b: 2, c: 1 }
