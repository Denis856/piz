var indexValue = 1;
showImg(indexValue);

function btn_slide(e) {showImg(indexValue = e);}
function side_slide(e) {showImg(indexValue += e);}
function showImg(e) {
   var i;
   var img = document.querySelectorAll('.home__img0');
   var sliders = document.querySelectorAll('.home__btn0');
   if(e > img.length) {indexValue = 1;}
   if(e < 1) {indexValue = img.length;}
   for(i = 0; i < img.length; i++) {
      img[i].style.opacity = "0";
   }
   for(i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('active');
   }
   img[indexValue - 1].style.opacity = "1";
   sliders[indexValue - 1].classList.add('active');
}

// next