//Excercise 1:
// let ketqua = 1+2+3+...+100

//Buoc 1:
// sum = 0;
// i=1;
// sum=sum+i;//1
// //Buoc 2
// sum = 1;
// i = 2;
// sum =sum +i = 1+2 =3

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// let i = 1;
// while (i <= 100) {
//     // sum+=i;
//     sum = sum + i;
//     i = i + 1;
// }
// console.log("🚀 ~ sum:", sum)


//Excercise 2:
// for (let i = 0; i <= 100; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("🚀 ~ i:", i)
//     }
// }
// let i = 0;

// while(i<=100){
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("🚀 ~ i:", i)
//     }
//     i++;
// }


// while(i<=100){
//     if ((i % 3 == 0) || (i % 5 == 0)) {
//         console.log("🚀 ~ i:", i)
//     }
//     i++;
// }
//Excercise 3:
//Giai thừa của một số:Tích của 1-> số đó
// 3! = 1*2*3
// 5! = 1*2*3*4*5

//Xác định input
// let n = 5.4;
// if(!Number.isInteger(n)){
//     console.log('Khong hop le!');
// }
// else{
//     console.log('hop le');
// }


//Tạo một biến để lưu kết quả trả về giai thừa của n
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     console.log("🚀 ~ i:", i)
//     // console.log("🚀 ~ result before:", result)

//     result = result * i;

//     // console.log("🚀 ~ result after:", result)

// }
// console.log("🚀 ~ result finally:", result)



// let j = 1;

// let resultWhile = 1;
// while (j <= n) {
//     resultWhile = resultWhile * j;
//     j = j + 1;
// }
// console.log("🚀 ~ resultWhile:", resultWhile)

//Excerise 4:
for (let x = 2; x <= 9; x++) {
    console.log('*******************Bảng cửu chương '+x+'***********************')
    for (let y = 1; y <= 10; y++) {
        let ketQua = x*y;
        console.log(`${x} x ${y} = ${ketQua}`)
        // console.log(x+ 'x' +y+ '=' + x*y)
    }
}

//Excersise 5:
