// const student1 = {
//     name:"Le Dang Khoa",
//     class: "10A5",
//     age:16,
// }
// // console.log("🚀 ~ student1 truoc:", student1)

// // delete student1.age
// // delete student1.name

// // console.log("🚀 ~ student1 sau :", student1)


// const student2 = {
//     nameTitle:"Le Dang Anh",
//     classTitle: "10A6",
//     age:18,
// }

// const key =;
// student2.key
// console.log("🚀 ~ student2.key:", student2.key)
// student2.classTitle
// const {nameTitle, classTitle, age} = student2;
// console.log("🚀 ~ age:", age)
// console.log("🚀 ~ classTitle:", classTitle)
// console.log("🚀 ~ nameTitle:", nameTitle)


// for (const key in student2) {
//     console.log("🚀 ~ key:", key)
//     console.log("🚀 ~ value:", student2[key])
//     student2['nameTitle']


// }

//     console.log("🚀 ~ student2['nameTitle']:", student2['nameTitle'])



//Bai 1:
// Input
const student = {
    name: "John",
    age: 20,
}
console.log("🚀 ~ student before add:", student)

student.major = "Computer Science";

console.log("🚀 ~ student after add:", student)

//Output:
// const student = {
//     name:"John",
//     age:20,
//     major:"Computer Science",
// }

//Bai 2:
//Input :Khoi tao doi tuong person
const person = {
    name: "Alice",
    age: 25,
    job: "Designer",
}
console.log("🚀 ~ person before delete:", person)
delete person.job;
console.log("🚀 ~ person after delete:", person)

//Bai 3:
const car = {
    brand: "Toyota",
    modal: "Camry",
    year: 2020
}
let total=0;
for (const key in car) {
    console.log("🚀 ~ key:", key)
    const value = car[key];
    console.log("🚀 ~ value:", value)
    total+=1;
    //car.brand
    //car.modal
    //car.year
}
console.log('Tong :',total)