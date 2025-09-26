//Bai 1:
//input: Bien x, hang so A và B

//Khai báo hàm: Định nghĩa nội dung của hàm
function ptBacNhat (x){
    const A = 3;
    const B = 4;
    const ketQua = A*x +B;
    return ketQua;
}

//Thực thi hàm => Lấy ra kết quả của hàm
const ketQuaPT = ptBacNhat(6);
console.log("🚀 ~ ketQuaPT:", ketQuaPT)

//Bai 2:
// Input: length (chiều dài), width(chiều rộng)
// Chu vi: (length+ width)*2 

function tinhChuVi(width, length){
    const ketQua = (width+ length) *2;
    return ketQua;
}

//cach 2: Sử dụng arrow function
const tinhChuVi2 = (width, length) =>{
    return (width+ length) *2;
}

const tinhChuVi3 = (width, length) =>(width+ length) *2;

const tinhChuVi4 = (width, length) =>((width+ length) *2);

const anonymusFunction = ((width, length)=>((width+ length) *2))(3,5)
console.log("🚀 ~ anonymusFunction:", anonymusFunction)


const chuVi2 = tinhChuVi2(3,4);
console.log("🚀 ~ chuVi2:", chuVi2)

const chuVi = tinhChuVi(10, 15);
console.log("🚀 ~ chuVi:", chuVi)

//Bai 3:
//input : r => bán kính hình tròn
//Noi dung: dienTichHinhTron = r*r*3.14; 

function dienTichHinhTron(r){
    const ketQua = Math.pow(r,2) * Math.PI;
    console.log("🚀 ~ dienTichHinhTron ~ ketQua:", ketQua)
    //Làm tròn đến chữ số thập phân thứ 2
    return ketQua.toFixed(2);
}

//Cach 2:

const dienTichHinhTron1 = (r) =>((Math.pow(r,2)*Math.PI).toFixed(2))

//Cach 3:
const anonymusDTHinhTron = ((r)=>((Math.pow(r,2)*Math.PI).toFixed(2)))(5)
console.log("🚀 ~ anonymusDTHinhTron:", anonymusDTHinhTron)
// console.log("🚀 ~ dienTichHinhTron1 ~ dienTichHinhTron1:", dienTichHinhTron1(5))
// const dtHinhTron = dienTichHinhTron(5);
// console.log("🚀 ~ dtHinhTron:", dtHinhTron)

//Bai 5:
//Input:...agrs
function tinhTong(...args){
    let tong=0;
    for(i=0;i<args.length;i++){
        tong+=args[i];
        console.log("🚀 ~ tinhTong ~ tong:", tong)
    }
    return tong;
}
// 0,1,2,3,4
const tong = tinhTong(1,2,3,4,5);
console.log("🚀 ~ tong:", tong)


