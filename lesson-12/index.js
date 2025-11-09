//Bước 1. Lấy ra được element (thẻ h1)
// const element1 = document.getElementsByClassName('titleH1');

// const element2 = document.getElementsByTagName('h1');

// const element3 = document.querySelector('h1');


// console.log("🚀 ~ element2:", element2)

// console.log("🚀 ~ element:", element1)

// console.log("🚀 ~ element3:", element3)

//Bước 2. 
// element3.innerText
// element3.innerText = "Tôi là siêu nhân Gao!";

//Sửa nội dung cho cả 3 thẻ
// for (let i = 0; i < element1.length; i++) {
//   const item = element1[i];
//   item.innerText = "I am Superman!"
// }

//Bài 1

// const elementH1 = document.querySelector('h1');

// elementH1.innerText = "Đây là nội dung";


// console.log("🚀 ~ elementH1:", elementH1)

// // Bài 2

// elementH1.style.backgroundColor = "blue";
// elementH1.style.color = "red";

//Bài 3

// const button = document.querySelector('.btnClick');
// console.log("🚀 ~ button:", button)

// let flagClickButton = true;

// button.addEventListener('click', function () {
//   const elementH1 = document.querySelector('h1');
//   if (flagClickButton) {
//     elementH1.style.backgroundColor = "blue";
//     elementH1.style.color = "red";
//     elementH1.innerText = "Đây là nội dung";
//   }
//   else {
//     elementH1.innerText = "This is content";
//     elementH1.style.backgroundColor = "white";
//     elementH1.style.color = "black";
//   }
//   flagClickButton = !flagClickButton;
// })

// const btn2= document.getElementsByClassName('btnClick');
// console.log("🚀 ~ btn2:", btn2)



//Bài 4:

//Lấy ra thẻ input nhập nội dung


const button = document.querySelector('.btn-add');
button.addEventListener('click', function () {

  // const inputContent = document.querySelector('.inputContent');

  // const nameTodo = document.querySelector('.todo p');
  // nameTodo.innerText = inputContent.value;

  const todoElement = document.querySelector('.todo');

  const listTodo = document.querySelector('.list-todo');
  listTodo.appendChild(todoElement)
})



