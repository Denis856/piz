
var productContainers = [...document.querySelectorAll('.products__items')];
var nxtBtn = [...document.querySelectorAll('.left')];
var preBtn = [...document.querySelectorAll('.right')];
var item20 = document.querySelectorAll('.products__item')[0];

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth + 43;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});