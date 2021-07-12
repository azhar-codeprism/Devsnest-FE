let container = document.querySelector('.front');
const defaultWhite = [
  129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
  190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
  250, 252, 266, 268, 271, 273,
];
for (i = 0; i < 400; i++) {
  container.innerHTML += '<div class="box"></div>';
}

let box = document.querySelectorAll('.box');
for (i = 0; i < 400; i++) {
  if (defaultWhite.includes(i)) {
  } else {
    box[i].classList.add('boxclicked');
  }
}

box.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item.classList.contains('boxclicked')) {
      item.classList.remove('boxclicked');
    } else {
      item.classList.add('boxclicked');
    }
  });
});