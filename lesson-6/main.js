// Bài 1.Tính diện tích và chu vi hình chữ nhật
//Input: length => chiều dài , width => chiểu rộng

let length = 10;
let width = 5;

let area = length * width;

let perimeter = (length + width) * 2;

//Output: area => diện tích, perimeter =>Chu vi
console.log("🚀 ~ perimeter:", perimeter);
console.log("🚀 ~ area:", area);

// Bài 2:
//Input: secs => số giây người dùng nhập vào

// secs = gio * 3600 + phut * 60 + giay;
// giayNhapVao % 3600 = phut * 60 + giay
// (giayNhapVao % 3600) % 60 = giay
const giayNhapVao = 12345;
const gio = (giayNhapVao - giayNhapVao % 3600) / 3600;
const phut = ((giayNhapVao % 3600) - (giayNhapVao % 3600) % 60) / 60;
const giay = giayNhapVao - gio * 3600 - phut * 60;

//Ouput: gio , phut , giay
console.log("Bài tập 2")
console.log("🚀 ~ gio:", gio)
console.log("🚀 ~ phut:", phut)
console.log("🚀 ~ giay:", giay)
console.log(gio + 'h' + ' ' + phut + 'm' + ' ' + giay + 's')//Nối chuỗi
console.log(`${gio}h ${phut}m ${giay}s`) //literal

//Bài tập 3:
//Input: coSo, luyThua
// 5^2
const coSo = 4;
const luyThua = 2;

// Cách 1: Dùng Math
const ketQuaLuyThua1 = Math.pow(coSo, luyThua);
// Cách 2
const ketQuaLuyThua2 = coSo ** luyThua;

//Output:ketQua
console.log("Bài tập số 3:")
console.log("🚀 ~ ketQuaLuyThua1:", ketQuaLuyThua1);
console.log("🚀 ~ ketQuaLuyThua2:", ketQuaLuyThua2);

// Câu 4: Tính trung bình cộng của 3 số bất kì
//Input : a,b,c => 3 số bất kì

const a = 1;
const b = 2;
const c = 3;

const trungBinhCong = (a + b + c) / 3;

//Output : tbc = (a+b+c)/3 Tính trung bình cộng 
console.log("Bài tập số 4:")
console.log("🚀 ~ trungBinhCong:", trungBinhCong);

// Câu 5:Tính khoảng cách 2 điểm
// Điểm A (x1, y1);
// Điểm B (x2, y2);

//input: x1,x2,y1,y2

const x1 = 5;
const x2 = 2;

const y1 = 8;
const y2 = 4;
// Math.sqrt => Tính căn bậc 2
// Math.pow => Tính lũy thừa
const khoangCach = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//Output: Khoảng của 2 điểm trong không gian
console.log("🚀 ~ Bài tập 5:")

console.log("🚀 ~ khoangCach:", khoangCach);

// Bài 6:
//Input a,b,c => Ba số nhập ngẫu nhiên

const soThuNhat = 5;
const soThuHai = 2;
const soThuBa = 3;
// soThuNhat>soThuhai và (&&) soThuNhat>soThuBa
const max = (soThuNhat > soThuHai) && (soThuNhat > soThuBa);

console.log("🚀 ~ Bài tập 6:")
console.log("🚀 ~ max:", max)

//Bài 7: So sánh 2 chuỗi nhập vào
//Input: chuoi1, chuoi2 => Hai chuỗi ngẫu nhiên người dùng nhập vào

const chuoi1 = 5;
const chuoi2 = "5";

const soSanhChuoi = chuoi1 === chuoi2;

//Output: So sánh 2 chuỗi
console.log("🚀 ~ soSanhChuoi:", soSanhChuoi)

// Bài 8 Kiểm tra số dương:
// input: soDuong => Số bất kì
const soDuong = 0;
const kiemTraSoDuong = soDuong > 0;
// output:
console.log("🚀 ~ kiemTraSoDuong:", kiemTraSoDuong);

// Bài 9:Kiểm tra năm nhuận
//input: namNhapVao => Số năm nhập vào
const namNhapVao = 2024;

const kiemTraNamNhuan = (namNhapVao % 400 === 0) || (namNhapVao % 4 === 0 && namNhapVao % 100 !== 0)
//Ouput: Kiểm tra năm nhuận
console.log("🚀 ~ kiemTraNamNhuan:", kiemTraNamNhuan)

//Bài 10:
//Input:
const gioThuNhat = 14;
const phutThuNhat = 35;
// => 12h50m
const gioThuHai = 14;
const phutThuHai = 45;
// => 13h45
//3 truong hop
// Giờ thứ nhất lớn hơn giờ thứ 2 => true
// Giờ thứ nhất bằng giờ thứ 2 và phút thứ nhất lớn hơn phút thứ 2=> true
// Còn lại sẽ trả về false
const checkGioLonHon = gioThuNhat > gioThuHai ? true : (gioThuNhat === gioThuHai && phutThuNhat > phutThuHai) ? true : false;
console.log("🚀 ~ checkGioLonHon:", checkGioLonHon)

const so = a > 0 ? 'so Duong' : 'soAm';









