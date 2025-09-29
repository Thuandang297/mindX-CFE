//Bước 1. Lấy ra được element (thẻ h1)
const element1 = document.getElementsByClassName('titleH1');

const element2 = document.getElementsByTagName('h1');

const element3 = document.querySelector('h1');


// console.log("🚀 ~ element2:", element2)

// console.log("🚀 ~ element:", element1)

// console.log("🚀 ~ element3:", element3)

//Bước 2. 
// element3.innerText
element3.innerText = "Tôi là siêu nhân Gao!";

//Sửa nội dung cho cả 3 thẻ
for (let i = 0; i < element1.length; i++) {
    const item = element1[i];
    item.innerText = "I am Superman!"
}

