const h1Element = document.getElementsByClassName('titleH1');
console.log('🚀 ~ h1Element:', h1Element)
for (let i = 0; i < h1Element.length; i++) {
  h1Element[i].innerText = "Day la the h1"
  h1Element[i].style.backgroundColor = 'red';
  h1Element[i].style.color = 'blue';

}

