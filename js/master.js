
new WOW().init();
const arrayOfImages_1 = ["01.jpg", "02.jpg"];
const arrayOfImages_2 = ["02.jpg", "01.jpg", "05.jpg"];
const arrayOfImages_3 = ["04.jpg", "01.jpg", "05.jpg", "03.jpg"];
const arrayOfImages_4 = ["03.jpg", "04.jpg", "01.jpg", "05.jpg", "02.jpg"];


function displayOfImages_1(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_1.length; i++){
   cartonaa+=` <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s *${i}">
   <img src="images/${arrayOfImages_1[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}
function displayOfImages_2(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_2.length; i++){
   cartonaa+=` <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s*${i}">
   <img src="images/${arrayOfImages_2[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}
function displayOfImages_3(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_3.length; i++){
   cartonaa+=` <div class="col-md-4 wow fadeInLeft" data-wow-delay="0.5s*${i}">
   <img src="images/${arrayOfImages_3[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}
function displayOfImages_4(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_4.length; i++){
   cartonaa+=` <div class="col-md-4 wow fadeInRight mb-3" data-wow-delay= "0.5s *{i}">
   <img src="images/${arrayOfImages_4[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}
