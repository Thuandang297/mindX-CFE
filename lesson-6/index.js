//**************Excercise 1:Tính chu vi và diện tích của hình chữ nhật
//Input
const width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
const height = Number(prompt("Nhập chiều dài hình chữ nhật:"));

//Tính toán
const area = width * height;
const perimeter = (width + height) * 2;

//Output:
console.log('🚀 ~ area:', area);
console.log('🚀 ~ perimeter:', perimeter);


//**************Exercice 2: Tính giờ phút giây 
//Input
const s = Number(prompt("Nhập số giây:"));

//Tính toán
const hours = Math.floor(s / 3600);
const minutes = Math.floor((s % 3600) / 60);
const second = s % 60;
const result = hours + 'h ' + minutes + 'm ' + second + 's';

//Output:
console.log('🚀 ~ result:', result);


//**************Excersice 3:Tính luỹ thừa
const baseNum = Number(prompt("Nhập cơ số:"));
const pow = Number(prompt("Nhập số mũ:"));

//Cách 1: Sử dụng Math
const result_math = Math.pow(baseNum, pow);
console.log('🚀 ~ result_math:', result_math);

//Cách 2: Sử dụng toán tử **
const result_basic = baseNum ** pow;
console.log('🚀 ~ result_basic:', result_basic);


//**************Excersice 4: Tính trung bình của 3 số bất kì
//Input
const firstNum = Number(prompt("Nhập số thứ nhất:"));
const secondNum = Number(prompt("Nhập số thứ hai:"));
const lastNum = Number(prompt("Nhập số thứ ba:"));

//Calculate
const average = (firstNum + secondNum + lastNum) / 3;

//Output
console.log('🚀 ~ average:', average);


//**************Excersice 5:Tính khoảng cách 2 điểm trong không gian
//Input
const x1 = Number(prompt("Nhập x1:"));
const y1 = Number(prompt("Nhập y1:"));
const x2 = Number(prompt("Nhập x2:"));
const y2 = Number(prompt("Nhập y2:"));

//Tính toán
const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

//Output:
console.log('🚀 ~ distance:', distance);


//**************Excersice 6:
//Input: 3 số người dùng nhập vào
const firstNumber = Number(prompt("Nhập số thứ nhất:"));
const secondNumber = Number(prompt("Nhập số thứ hai:"));
const lastNumber = Number(prompt("Nhập số thứ ba:"));

//Tính toán
const firstNumIsMax = (firstNumber > secondNumber) && (firstNumber > lastNumber);

//Output:
console.log('🚀 ~ firstNumIsMax:', firstNumIsMax);


//**************Excersice 7:
//Input: 2 chuỗi người dùng nhập vào
const firstString = prompt("Nhập chuỗi thứ nhất:");
const secondString = prompt("Nhập chuỗi thứ hai:");

//Tính toán
const isStringEqual = firstString === secondString;

//Output:
console.log('🚀 ~ isStringEqual:', isStringEqual);


//**************Excersice 8:
//Input: số nguyên người dùng nhập vào
const intNum = Number(prompt("Nhập một số nguyên:"));

//Tính toán
const isPositiveNum = intNum > 0;

//Output:
console.log('🚀 ~ isPositiveNum:', isPositiveNum);


//**************Excersice 9:
//Input: số năm nhập từ bàn phím
const year = Number(prompt("Nhập năm:"));

//Tính toán
const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

//Output:
console.log(`🚀 ~ ${year}: `, isLeapYear);


//**************Excersice 10:
//Input: Giờ và phút nhập từ bàn phím
const hours1 = Number(prompt("Nhập giờ thứ nhất:"));
const minutes1 = Number(prompt("Nhập phút thứ nhất:"));
const hours2 = Number(prompt("Nhập giờ thứ hai:"));
const minutes2 = Number(prompt("Nhập phút thứ hai:"));

//Tính toán
const checkOverTime = hours1 > hours2 || (hours1 === hours2 && minutes1 > minutes2);

//Output:
console.log(`🚀 ~Thời gian ${hours1}h: ${minutes1}m ${checkOverTime ? 'lớn hơn' : 'nhỏ hơn'} ${hours2}h: ${minutes2}m`);
