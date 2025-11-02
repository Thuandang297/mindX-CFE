//Bai 1:
//input: Bien x, hang so A và B

//Khai báo hàm: Định nghĩa nội dung của hàm
function ptBacNhat(x) {
    const A = 3;
    const B = 4;
    const ketQua = A * x + B;
    return ketQua;
}

//Thực thi hàm => Lấy ra kết quả của hàm
const ketQuaPT = ptBacNhat(6);

//Bai 2:
// Input: length (chiều dài), width(chiều rộng)
// Chu vi: (length+ width)*2 

function tinhChuVi(width, length) {
    const ketQua = (width + length) * 2;
    return ketQua;
}

//cach 2: Sử dụng arrow function
const tinhChuVi2 = (width, length) => {
    return (width + length) * 2;
}

const tinhChuVi3 = (width, length) => (width + length) * 2;

const tinhChuVi4 = (width, length) => ((width + length) * 2);

const anonymusFunction = ((width, length) => ((width + length) * 2))(3, 5)
console.log("🚀 ~ anonymusFunction:", anonymusFunction)


const chuVi2 = tinhChuVi2(3, 4);
console.log("🚀 ~ chuVi2:", chuVi2)

const chuVi = tinhChuVi(10, 15);
console.log("🚀 ~ chuVi:", chuVi)

//Bai 3:
//input : r => bán kính hình tròn
//Noi dung: dienTichHinhTron = r*r*3.14; 

function dienTichHinhTron(r) {
    const ketQua = Math.pow(r, 2) * Math.PI;
    console.log("🚀 ~ dienTichHinhTron ~ ketQua:", ketQua)
    //Làm tròn đến chữ số thập phân thứ 2
    return ketQua.toFixed(2);
}

//Cach 2:

const dienTichHinhTron1 = (r) => ((Math.pow(r, 2) * Math.PI).toFixed(2))

//Cach 3:
const anonymusDTHinhTron = ((r) => ((Math.pow(r, 2) * Math.PI).toFixed(2)))(5)
// console.log("🚀 ~ anonymusDTHinhTron:", anonymusDTHinhTron)
// console.log("🚀 ~ dienTichHinhTron1 ~ dienTichHinhTron1:", dienTichHinhTron1(5))
// const dtHinhTron = dienTichHinhTron(5);
// console.log("🚀 ~ dtHinhTron:", dtHinhTron)

//Bai 5:
//Input:...agrs
function tinhTong(...args) {
    let tong = 0;
    for (i = 0; i < args.length; i++) {
        tong += args[i];
    }
    return tong;
}
// 0,1,2,3,4
const tong = tinhTong(1, 2, 3, 4, 5);
// console.log("🚀 ~ tong:", tong)

// Bài 6:Viết một hàm tính tổng của một dãy số từ start đến end, nhận vào 2 tham số start và end

// Input: start = 5, end = 10
console.log("Ex6--------------------------")
let sum = 0;
const sumStartToEnd = (start, end) => {
    for (let index = start; index <= end; index++) {
        sum += index;
    }
    return sum;
}
// console.log('🚀 ~ sum:', sum)
// Output: Sum = 45

// Bài 7:Viết hàm kiểm tra một chuỗi str có đối xứng hay không(Palindrome), hàm nhận vào một chuỗi str

// Input: str => Chuỗi cần kiểm tra có đối xứng hay không
console.log("Ex7--------------------------")

const checkStrPalindrome = (str) => {
    for (let index = 0; index < str.length / 2; index++) {
        const start = str[index];
        const end = str[str.length - 1 - index];
        if (start !== end) {
            return false;
        }
    }
    return true;
}
const isPalindrome = checkStrPalindrome('amama')
console.log('🚀 ~ isPalindrome:', isPalindrome)
// Ouput: Trả về true nếu đối xứng còn lại trả về false

//Bài 8:Viết một hàm kiểm tra tất cả các số trong một mảng có phải là số chẵn hay không

// Input: [2, 4, 6, 8, 10]
console.log("Ex8--------------------------")

const input8 = [0, 2, 4, 6, 8, 10];
const checkOddNumbers = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 !== 0) {
            return 'FALSE'
        }
    }
    return 'TRUE'
}
console.log('🚀 ~ checkOddNumbers ~ checkOddNumbers:', checkOddNumbers(input8))

// Output: TRUE nếu là mảng chẵn, còn lại trả về false

// Bài 9:Viết hàm tính tổng của một mảng số, nhưng bỏ qua tất cả số âm

// Input: [3, -1, 4, -2, 5]
console.log("Ex9--------------------------")

const input9 = [3, -1, 4, -2, 5];
const sumOfPositiveNumbersFn = (array) => {
    let sumOfPositiveNumbers = 0;

    for (let index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            sumOfPositiveNumbers += array[index];
        }
    }
    return sumOfPositiveNumbers;
}
sumOfPositiveNumbersFn(input9)
console.log('🚀 ~ sumOfPositiveNumbersFn:', sumOfPositiveNumbersFn(input9))

// Output: 12

// Bài 10: Viết hàm tìm giá trị lớn nhất của một mảng sử dụng Rest Operator

console.log("Ex10--------------------------")

// Input: [1, 3, 7, 0, -2]

const findMaxWithRestOpr = (...array) => {
    let max = 0;
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item > max) {
            max = item;
        }
    }
    return max;
}
console.log('🚀 ~ findMaxWithRestOpr(1, 3, 7, 0, 12):', findMaxWithRestOpr(1, 3, 7, 0, 12))
// Output: 7 => giá trị lớn nhất của mảng đầu vào

// Bài 11: Viết một hàm nhận vào một mảng các số nguyên và sắp xếp mảng đó theo chiều từ nhỏ tới lớn.
// Ví dụ:
// myFunction([12, 33, 45, 7, 89]) -> Output: [7, 12, 33, 45, 89]

// Input: [12, 33, 45, 7, 89]
console.log("Ex11--------------------------")

const ascendingOrder = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}
console.log('🚀 ~ ascendingOrder([12, 33, 45, 7, 89]):', ascendingOrder([12, 33, 45, 7, 89]))
// Output: [7, 12, 33, 45, 89]