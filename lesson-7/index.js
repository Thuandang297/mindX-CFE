// Excercise 1: Tính tổng 1 + 2 + ... + n
let n1 = Number(prompt("Nhập số n để tính tổng 1+2+...+n:"));
if (Number.isInteger(n1) && n1 > 0) {
  let sum = 0;
  for (let i = 1; i <= n1; i++) {
    sum += i;
  }
  console.log("Tổng:", sum);
} else {
  console.log("Vui lòng nhập số nguyên dương!");
}

// Excercise 2: In ra các số từ 0..100 chia hết cho 3 và 5
console.log("Các số chia hết cho 3 và 5:");
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Excercise 3: Tính giai thừa n!
let n2 = Number(prompt("Nhập số n để tính giai thừa n!:"));
if (Number.isInteger(n2) && n2 >= 0) {
  let factorial = 1;
  for (let i = 1; i <= n2; i++) {
    factorial *= i;
  }
  console.log(`${n2}! = ${factorial}`);
} else {
  console.log("Vui lòng nhập số nguyên không âm!");
}

// Excercise 4: Bảng cửu chương
console.log("******** Bảng cửu chương ********");
for (let x = 2; x <= 9; x++) {
  console.log(`---- Bảng nhân ${x} ----`);
  for (let y = 1; y <= 10; y++) {
    console.log(`${x} x ${y} = ${x * y}`);
  }
}

// Excercise 5: Chuyển số thập phân sang nhị phân
let n3 = Number(prompt("Nhập số nguyên để đổi sang nhị phân:"));
if (Number.isInteger(n3) && n3 >= 0) {
  let binary = "";
  let temp = n3;
  while (temp > 0) {
    binary = (temp % 2) + binary;
    temp = Math.floor(temp / 2);
  }
  console.log(`${n3} (thập phân) = ${binary || "0"} (nhị phân)`);
} else {
  console.log("Vui lòng nhập số nguyên không âm!");
}

// Excercise 6: Tính biểu thức sqrt(0 + sqrt(1 + ... sqrt(n)))
let n4 = Number(prompt("Nhập số n cho bài toán sqrt lồng nhau (Ex6):"));
if (Number.isInteger(n4) && n4 >= 0) {
  let result6 = 0;
  for (let i = 0; i <= n4; i++) {
    result6 = Math.sqrt(i + result6);
  }
  console.log("Kết quả Ex6:", result6);
}

// Excercise 7: Tính biểu thức sqrt(n + sqrt(n-1 + ... sqrt(1))))
let n5 = Number(prompt("Nhập số n cho bài toán sqrt lồng ngược (Ex7):"));
if (Number.isInteger(n5) && n5 > 0) {
  let result7 = 0;
  for (let i = n5; i > 0; i--) {
    result7 = Math.sqrt(i + result7);
  }
  console.log("Kết quả Ex7:", result7);
}
