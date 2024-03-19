const elMenubtn = document.querySelector('.menu-btn');//link klasi tobib olinayapdi
const elSpan = document.querySelector('.span');//span klasi topib ilinayapdi
const elNavMenu = document.querySelector('.nav-menu');//Linklarni ota elementi klasini topib olayapdi


//link bosilganda spanning klasiga yangi klas qo'shish uchun kiritilayapdi
elMenubtn.addEventListener('click', function() {//link klasi click hodisasiga quloq solayapdi va funktsiya kiritilayapdi
  elSpan.classList.toggle('span-btn');//link bosilganda spanning klasiga yangi klas qo'shilayapdi
  elNavMenu.classList.toggle('nav-menu-active');//linklarni o'rab turuvchi ota elementning klaslistiga nav-menu-active klasini qo'shib qo'yayapdi
})
