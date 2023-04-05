const product = [
   {
      id: 0,
      img: 'item1__img1',
      img0: 'img/img21.jpg',
      sale_class: 'percent',
      sale_text: -30 ,
      sale_sing: '%',
      title: 'Syltherine',
      text: 'Stylish cafe chair',
      price: 2500000,
      price2: 3500000,
      price2_class: 'price2',
   },
   {
      id: 1,
      img: 'item1__img2',
      img0: 'img/img22.jpg',
      sale_class: 'new',
      sale_text: 'New',
      sale_sing: '',
      title: 'Leviosa',
      text: 'Slylish cafe chair',
      price: 2500000,
      price2: '',
      price2_class: '',
   },
   {
      id: 2,
      img: 'item1__img3',
      img0: 'img/img23.jpg',
      sale_class: 'percent',
      sale_text: 50,
      sale_sing: '%',
      title: 'Lolito',
      text: 'Luxury big sofa',
      price: 700000,
      price2: 1400000,
      price2_class: 'price2',
   },
   {
      id: 3,
      img: 'item1__img4',
      img0: 'img/img24.jpg',
      sale_class: 'new',
      sale_text: 'New',
      sale_sing: '',
      title: 'Respira',
      text: 'Minimalist fan',
      price: 500000,
      price2: '',
      price2_class: '',
   },
   {
      id: 4,
      img: 'item1__img5',
      img0: 'img/img25.jpg',
      sale_class: '',
      sale_text: '',
      sale_sing: '',
      title: 'Grifo',
      text: 'Night lamp',
      price: 1500000,
      price2: '',
      price2_class: '',
   },
   {
      id: 5,
      img: 'item1__img6',
      img0: 'img/img26.jpg',
      sale_class: 'new',
      sale_text: 'New',
      sale_sing: '',
      title: 'Muggo',
      text: 'Small mug',
      price: 150000,
      price2: '',
      price2_class: '',
   },
   {
      id: 6,
      img: 'item1__img7',
      img0: 'img/img27.jpg',
      sale_class: 'percent',
      sale_text: 50,
      sale_sing: '%',
      title: 'Pingky',
      text: 'Cute bed set',
      price: 7000000,
      price2: 1400000,
      price2_class: 'price2',
   },
   {
      id: 7,
      img: 'item1__img8',
      img0: 'img/img28.jpg',
      sale_class: 'new',
      sale_text: 'New',
      sale_sing: '',
      title: 'Potty',
      text: 'Minimalist flower pot',
      price: 500000,
      price2: '',
      price2_class: '',
   }
];

const categories = [... new Set(product.map((item) => {return item;}))];
let i = 0;
document.getElementById('products__items').innerHTML = categories.map((item)=>{
   var {img, sale_class, sale_text, sale_sing, title, text, price, price2_class, price2} = item;
   return (
      `
      <div class="products__item item1">
         <div class="item1__block_img ${img}">
            <button class="item1__sale ${sale_class}">${sale_text}${sale_sing}</button>
            `+"<button class='item1__btn' onclick='addtocard("+(i++)+")'>Add to card</button>"+`
            <div class="item1__info"">
               <div class="item1__info_item">
                  <img src="img/send.png" alt="icon" class="item1__info_img">
                  <p class="item1__info_text">Share</p>
               </div>
               <div class="item1__info_item">
                  <img src="img/favorit2.png" alt="icon" class="item1__info_img">
                  <p class="item1__info_text">Like</p>
               </div>
            </div>
         </div>
         <div class="item1__block_text">
            <p class="item1__title">${title}</p>
            <p class="item1__text">${text}</p>
            <p class="item1__price">${price}<span class='${price2_class}'>${price2}</span></p>
         </div>
      </div>

      `
      );
}).join('');


var cart = [];

function addtocard(a){
   cart.push({...categories[a]});
   displayCard();
}
function delElem(a) {
   cart.splice(a, 1);
   displayCard();
}


document.getElementById('my_item').innerHTML = 'Your card is empty';

function displayCard(a){
   let j = 0, total = 0;
   document.getElementById('count').innerHTML = cart.length;
   if(cart.length == 0) {
      document.getElementById('count').innerHTML = '';
      document.getElementById('my_item').innerHTML = 'Your card is empty';
      document.getElementById('total').innerHTML = "$ "+0+" .00";
   } else {
      var erty = document.getElementById('my_item');
      erty.innerHTML = cart.map((items)=>{
         erty = [... new Set(cart.map((items) => {return items;}))];
         document.querySelector('.basket').classList.add('active');
         var {img0, title, text, sale_class, sale_text, sale_sing, price} = items;
         total = total + price;
         document.getElementById('total').innerHTML = "$ "+ total +" .00";
         return (
            `
            <div class="cart__item cart">
               <img alt="icon" class="cart__img" src=${img0}>
                  <div class='cart__block_text'>
                     <p class="cart__title">${title}</p>
                     <p class="cart__text">${text}</p>
                  </div>
               <p class="cart__price">$ ${price} .00</p>
               <p class="cart__sale ${sale_class}">${sale_text}${sale_sing}</p>` +
               "<button class='cart__btn' onclick='delElem("+ (j++) +")'>DELETE</button>"+`
            </div>
            `)
      }).join('');
   }
}