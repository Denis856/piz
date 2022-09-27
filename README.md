<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <link rel="stylesheet" href="css/media.css">
   <title>Self 11</title>
</head>
<body>
   <div class="rety" style="background: url(/img/piza.jpg) 0 0/ cover no-repeat">
      <div class="wrapper">
         <header class="header">
            <a href="#" class="logo">
               <img src="img/logo.png" alt="icon">
            </a>
            <nav class="header_menu">
               <ul class="header_list">
                  <li>
                     <a href="#" class="header_link">
                        link
                     </a>
                  </li>
                  <li>
                     <a href="#" class="header_link">
                        link
                     </a>
                  </li>
                  <li>
                     <a href="#" class="header_link">
                        link
                     </a>
                  </li>
               </ul>
            </nav>
         </header>
         <div id="pop" class="tan">
            <div class="thank">Thanks for
               <br>order
               <br>ёпт!!!
               <div onclick="show6()" id="close" class="btn5">
                  <div class="close"></div>
               </div>
            </div>
         </div>
         <main id="main" class="main">
            <div id="content" class="content">
               <div class="content_gallery">
                  <div class="gallery_items">
                     <div class="gallery_item">
                        <img src="img/pizza.png" alt="icon">
                        <div class="prize1">
                           <div class="prize_text">pizza1 5$</div>
                           <button onclick="show()" class="prize_btn">add</button>
                        </div>
                     </div>
                     <div class="gallery_item">
                        <img src="img/pizza.png" alt="icon">
                        <div class="prize1">
                           <div class="prize_text">pizza2 5$</div>
                           <button onclick="show2()" class="prize_btn">add</button>
                        </div>
                     </div>
                     <div class="gallery_item">
                        <img src="img/pizza.png" alt="icon">
                        <div class="prize1">
                           <div class="prize_text">pizza3 5$</div>
                           <button onclick="show3()" class="prize_btn">add</button>
                        </div>
                     </div>
                     <div class="gallery_item">
                        <img src="img/pizza.png" alt="icon">
                        <div class="prize1">
                           <div class="prize_text">pizza4 5$</div>
                           <button onclick="show4()" class="prize_btn">add</button>
                        </div>
                     </div>
                     <div class="gallery_item">
                        <img src="img/pizza.png" alt="icon">
                        <div class="prize1">
                           <div class="prize_text">pizza 5$</div>
                           <a href="#" class="prize_btn">add</a>
                        </div>
                     </div>
                     <div class="gallery_item">
                        <img src="img/pizza.png" alt="icon">
                        <div class="prize1">
                           <div class="prize_text">pizza 5$</div>
                           <a href="#" class="prize_btn">add</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <aside id="popup" class="sidebar">
               <div onclick="show5()" id="close" class="btn4">
                  <div class="close"></div>
               </div>
               <h1 class="title">Orders</h1>
               <div class="piz">
                  <div id="pizza1" class="pizza1 pizza">
                     <div class="pizza_img">
                        <img id="img" src="img/pizza.png" alt="icon">
                     </div>
                     <div class="pizza_text">
                        pizza1 5$
                     </div>
                  </div>
                  <div id="pizza2" class="pizza2 pizza">
                     <div class="pizza_img">
                        <img src="img/pizza.png" alt="icon">
                     </div>
                     <div class="pizza_text">
                        pizza2 5$
                     </div>
                  </div>
                  <div id="pizza3" class="pizza3 pizza">
                     <div class="pizza_img">
                        <img src="img/pizza.png" alt="icon">
                     </div>
                     <div class="pizza_text">
                        pizza3 5$
                     </div>
                  </div>
                  <div id="pizza4" class="pizza4 pizza">
                     <div class="pizza_img">
                        <img src="img/pizza.png" alt="icon">
                     </div>
                     <div class="pizza_text">
                        pizza4 5$
                     </div>
                  </div>
               </div>
               <div class="btn1">
                  <a onclick="show1()" href="#" class="order">order</a>
               </div>
            </aside>
         </main>
         <footer class="footer">
            <p class="footer_text">
               Copy 2022
            </p>
            <div class="footer_soces">
               <a href="#" class="soc_link">
                  <img src="img/soc1.png" alt="">
               </a>
               <a href="#" class="soc_link">
                  <img src="img/soc2.png" alt="">
               </a>
               <a href="#" class="soc_link">
                  <img src="img/soc3.png" alt="">
               </a>
               <a href="#" class="soc_link">
                  <img src="img/soc4.png" alt="">
               </a>
            </div>
         </footer>
      </div>
      </div>
   <script>
      let popup = document.getElementById('popup');
      let main = document.getElementById('main');
      let pizza1 = document.getElementById('pizza1');
      let pizza2 = document.getElementById('pizza2');
      let pizza3 = document.getElementById('pizza3');
      let pizza4 = document.getElementById('pizza4');
      let img = document.getElementById('img');
      let content = document.getElementById('content');

      let pop = document.getElementById('pop');


      function show(){
         popup.classList.add('show');
         main.classList.add('tran');
         pizza1.classList.add('show3');
         pizza1.classList.add('flex');
         content.classList.add('down');
      }
      function show1(){
         popup.classList.remove('show');
         main.classList.remove('tran');
         pizza1.classList.remove('show3');
         pizza1.classList.remove('flex');
         pizza2.classList.remove('show3');
         pizza2.classList.remove('flex');
         pizza3.classList.remove('show3');
         pizza3.classList.remove('flex');
         pizza4.classList.remove('show3');
         pizza4.classList.remove('flex');
         content.classList.remove('down');
         pop.classList.add('open');
      }

      function show6(){
         pop.classList.remove('open');
      }

      function show5(){
         popup.classList.remove('show');
         main.classList.remove('tran');
         pizza1.classList.remove('show3');
         pizza1.classList.remove('flex');
         pizza2.classList.remove('show3');
         pizza2.classList.remove('flex');
         pizza3.classList.remove('show3');
         pizza3.classList.remove('flex');
         pizza4.classList.remove('show3');
         pizza4.classList.remove('flex');
         content.classList.remove('down');
      }

      function show2(){
         popup.classList.add('show');
         main.classList.add('tran');
         pizza2.classList.add('show3');
         pizza2.classList.add('flex');
         content.classList.add('down');
      }
      function show3(){
         popup.classList.add('show');
         main.classList.add('tran');
         pizza3.classList.add('show3');
         pizza3.classList.add('flex');
         content.classList.add('down');
      }
      function show4(){
         popup.classList.add('show');
         main.classList.add('tran');
         pizza4.classList.add('show3');
         pizza4.classList.add('flex');
         content.classList.add('down');
      }
   </script>
   <script src="js/jquery-1.9.1.min.js"></script>
   <script src="js/main.js"></script>
</body>
</html>
