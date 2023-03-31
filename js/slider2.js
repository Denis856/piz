let scrollContainer = document.querySelector('.tricks__items');
let img = document.querySelectorAll('.tricks__item')[0];
let backimg = document.getElementById('left');
let nextimg = document.getElementById('right');

scrollContainer.addEventListener("wheel", (evt) =>{
   evt.preventDefault();
   scrollContainer.scrollLeft += evt.deltaY;
   scrollContainer.style.scrollBehavior = "auto";
   
})
let containerWidth = img.clientWidth + 32;
nextimg.addEventListener('click', ()=> {
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft += containerWidth;
})

backimg.addEventListener('click', ()=> {
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft -= containerWidth;
})