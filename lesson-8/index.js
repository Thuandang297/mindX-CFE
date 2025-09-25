//Bai 1:
//Input: names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

const first = names[0];
const last = names[names.length - 1];
//Output:
console.log('🚀 ~ first:', first)
console.log('🚀 ~ last:', last)

//Bai 2:
//Input: names = ["John", "Jane", "Jim", "Jake"];
const namesUpdate = ["John", "Jane", "Jim", "Jake"];
console.log('🚀 ~ namesUpdate before:', namesUpdate)
namesUpdate[1] = 'Mary';
//Output:
console.log('🚀 ~ namesUpdate after:', namesUpdate)

// Bai 3
//Input: const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const names3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

for (let i = 0; i < names3.length; i++) {
  console.log('People with index [' + i + '] is:' + names3[i])
}

//Bai 4:
//input: names = ["Alice", "Bob", "Charlie", "David"]

const names4 = ["Alice", "Bob", "Charlie", "David"];
names4[names4.length] = 'MindX';
console.log('🚀 ~ names4:', names4)

// Bai 5:
//Input:numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];
let j = 0;

for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] % 2 !== 0) {
    result[j] = numbers5[i];
    j++;
  }
}

console.log('🚀 ~ result:', result)
//Bai 6:
//Input: names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const names6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let index = 0; index < names6.length; index++) {
  if (names6[index] === 'David') {
    console.log('David has index: ', index);
    break;
  }
}

//Bai 7:
// input: numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const numbers7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
let count = 0;
//Finding 2 in array
for (let index = 0; index < numbers7.length; index++) {
  if (numbers7[index] === 2) {
    count += 1;
    continue;
  }
}
console.log('So lan xuat hien cua 2 la:' + count + ' lan!')

//Bai 8: Tim so lon nhat trong mang
const numbers8 = [5, 2, 9, 3, 7, 11, 8, 20];
let max = 0;
for (let index = 0; index < numbers8.length; index++) {
  const element = numbers8[index];
  if (element > max) {
    max = element;
  }
}

//Ouput:
console.log('🚀 ~ max:', max)

//Bai 9: Dao nguoc mang
//Input :[5, 4, 3, 2, 1]
const numbers9 = [5, 4, 3, 2, 1];
for (let index = numbers9.length; index >= 0; index--) {
  const element = numbers9[index];
  console.log('🚀 ~ element:', element)
}

//Bai 10: Xoa phan tu trung nhau khoi mang
const number10 = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6];
const resultUnique = [];
let check = 0;

for (let index = 0; index < number10.length; index++) {
  let isExist = false;

  const element = number10[index];
  for (let index2 = 0; index2 < resultUnique.length; index2++) {
    const elemenDuplicate = resultUnique[index2];
    if (elemenDuplicate === element) { isExist = true; break }
  }
  if (!isExist) {
    resultUnique[check] = element;
    check++;
  }

}

console.log('🚀 ~ resultUnique:', resultUnique)



//Bai 11: Tinh tong cac phan tu trong mang/
const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < numbers11.length; index++) {
  const element = numbers11[index];
  sum += element;
}
console.log('🚀 ~ sum:', sum)
