var search = document.querySelector('.header__link23');
var group = document.querySelector('.header__group');
var burger = document.querySelector('.header__burger');
var list1 = document.querySelector('.header__list');
var arr1 = document.querySelectorAll('.header__item');
var list0 = document.querySelectorAll('.footer__block');

search.addEventListener('click', ()=> {
   group.classList.toggle('active2');
});

arr1.forEach(item => {
   item.addEventListener('click', ()=> {
      group.classList.remove('active2');
   });
});

burger.addEventListener('click', ()=> {
   burger.classList.toggle('active');
   list1.classList.toggle('active');
   group.classList.remove('active2');
   document.querySelector('body').classList.toggle('active');
   list0.forEach(item => {
      item.classList.remove('active');
   })
});

// next


var title1 = document.querySelectorAll('.footer__title0');

title1.forEach(item => {
   item.addEventListener('click', (e)=> {
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// next

var arr11 = document.querySelectorAll('.home__arrow');

arr11.forEach(item => {
   item.addEventListener('mouseover', ()=> {
      item.querySelector('.home__icon').style.color = 'red';
      item.classList.add('active');
   });
   item.addEventListener('mouseout', ()=> {
      item.querySelector('.home__icon').style.color = 'white';
      item.classList.remove('active');
   });
});

// next

function consoleBG() {
   if ($(window).scrollTop() == 0) {
     $('.header').removeClass('active');
   } else {
      $('.header').addClass('active');
   }
 }
 consoleBG();
 
 $(window).scroll(function() {
   consoleBG();
 });


//  next 

$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });