//Bài tập 1:In ra tên của người ở vị trí đầu tiên và vị trí cuối cùng trong mảng.

//input: names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const first = names[0];
const last = names[names.length - 1];

//output: Lấy ra phần tử đầu tiên và cuối cùng của mảng
// console.log('🚀 ~ first:', first)
// console.log('🚀 ~ last:', last)

// Bài tập 2: Thay đổi tên của người ở vị trí thứ 2 thành “Mary” và in ra mảng sau khi thay đổi.

//input:  names = ["John", "Jane", "Jim", "Jake"];

const names2 = ["John", "Jane", "Jim", "Jake"];
names2[1] = "Mary";

//output:  ["John", “Mary”, "Jim", "Jake"]
// console.log('🚀 ~ names2:', names2)

// Bài tập 3:
//input: names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]
const names3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < names3.length; i++) {
  const item = names3[i];
  // console.log('🚀 ~ item:', item)
}
//output: in ra từng giá trị trong mảng

//Bài tập 4:Thêm “MindX” vào cuối mảng và in ra mảng sau khi thêm.
//input : names = ["Alice", "Bob", "Charlie", "David"];
const names4 = ["Alice", "Bob", "Charlie", "David"];

names4[names4.length] = "MindX";

//output: ["Alice", "Bob", "Charlie", "David","MindX"]
// console.log('🚀 ~ result 4:', names4)

//Bài 5:Lọc ra các số lẻ trong mảng số.|
//input: numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  // console.log('🚀 ~ numbers[i]:', numbers[i])
  const item = numbers[i];
  if (item % 2 !== 0) {
    // console.log('🚀 ~ item so le:', item)
  }
  else {
    // console.log('🚀 ~ item so chan:', item)
  }
}

//output: [1,3,5,7,9];

// Bài tập 6:Tìm kiếm tên "David" trong mảng và in ra kết quả tìm kiếm.
const names6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

for (let i = 0; i < names6.length; i++) {
  if (names6[i] === "David") {
    // console.log("Đã tìm được david", names6[i])
  }
}

//output: Lấy ra David trong mảng
//Bài số 7:Đếm Số Lần Xuất Hiện của một số trong Mảng:
//input: const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2], targetCounting = 2;
const numbers7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
let count = 0;
for (let i = 0; i < numbers7.length; i++) {
  const item = numbers7[i];
  if (item === targetCounting) { //Nếu giá trị của phần tử bằng 2.
    count += 1;// Tăng biến đếm count (số lần xuất hiện của phần tử 2) lên 1 đơn vị.
  }
}

//output: 4 => Số lần xuất hiện của 2 ở trong mảng numbers
// console.log('🚀 ~ count:', count)

//Bài tập 8:Tìm Số Lớn Nhất Trong Mảng:
//input :  numbers = [5, 2, 9, 3, 7, 11, 8];
const numbers8 = [5, 2, 9, 3, 7, 11, 8];
let max = 0; //Lưu giá trị lớn nhất của mảng trong từng vòng lặp

for (let i = 0; i < numbers8.length; i++) {
  const item = numbers8[i];
  if (item > max) {
    max = item;
  }
}

//output: số lớn nhất trong mảng => 11
// console.log('🚀 ~ max:', max)


//Bài tập 9: Đảo Ngược Mảng:
//input :const array = [1, 2, 3, 4, 5];
const array = [1, 2, 3, 4, 5];
let newArray = [];
let newIndex = 0;
for (let i = array.length - 1; i >= 0; i--) {
  const item = array[i];
  newArray[newIndex] = item;
  newIndex += 1;
}

//ouput: đảo ngược các vị trí trong mảng:[5,4,3,2,1]
// console.log('🚀 ~ newArray:', newArray)

//Bài tập 10: Xóa Phần Tử Trùng Nhau Khỏi Mảng
//input: duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];

let newDuplicatesArray = [];

for (let i = 0; i < duplicatesArray.length; i++) {
  let isDuplicate = false;
  const item = duplicatesArray[i];
  //Kiếm tra xem item đã xuất hiện trong mảng newDuplicatesArray hay chưa?
  for (let j = 0; j < newDuplicatesArray.length; j++) {
    const newItem = newDuplicatesArray[j];
    if (newItem === item) {
      isDuplicate = true;
      break;
    }
  }
  //Nếu chưa xuất hiện => Thêm phần tử đó vào trong mảng newDuplicatesArray
  if (!isDuplicate) {
    newDuplicatesArray[newDuplicatesArray.length] = item;
  }
  //Nếu đã xuất hiện rồi => lặp tiếp tới phần tử tiếp theo (bỏ qua)

}

//output:  [1, 2, 3, 4, 5] => một mảng có các giá trị không trùng nhau.
// console.log('🚀 ~ newDuplicatesArray:', newDuplicatesArray)

// Bài 11:
//input :numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tong = 0;
//Lặp qua từng phần tử
for (let i = 0; i < numbers11.length; i++) {
  const item = numbers11[i];
  //Cộng dồn giá trị của các phần tử đó vào 1 biến (tong)
  tong += item;
}
//output: 55 => Tổng giá trị của các phần tử trong mảng
console.log('🚀 ~ tong:', tong)
