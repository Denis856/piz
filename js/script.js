let arr0 = document.querySelector('.header__lang_icon');
let list0 = document.querySelector('.header__lang_list');
let rus = document.querySelector('.rus');
let eng = document.querySelector('.eng');
let eng0 = document.querySelector('.header__lang_text');
let burger = document.querySelector('.header__burger');
let list01 = document.querySelector('.menu__list');

arr0.addEventListener('click', function(){
   list0.classList.toggle('active');
});

eng.addEventListener('click', ()=>{
   eng0.textContent = "en";
});
rus.addEventListener('click', ()=>{
   eng0.textContent = "ru";
});


burger.addEventListener('click', ()=> {
   burger.classList.toggle('active');
   list01.classList.toggle('active');
});