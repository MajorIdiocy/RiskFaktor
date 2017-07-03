var currentSlide = 1;
var prevSlide;
focusDiv(currentSlide);

function plus(i) {
  if(i<30){
    if(i>0 && (currentSlide==5 || currentSlide==15)){
      focusDiv(currentSlide+=2);
    } else if(i<0 && (currentSlide==7 || currentSlide==17)) {
            focusDiv(currentSlide-=2);
            } else {
              focusDiv(currentSlide+=i);
            }
  } else {
    focusDiv(currentSlide+=1);
  }
}

function mgmtHome() {
  focusDiv(currentSlide=7);
}

function fiscalHome() {
  focusDiv(currentSlide=13);
}

function exSavings() {
  focusDiv(currentSlide=16);
}

function mainDiv() {
  focusDiv(currentSlide=1);
}

function focusDiv(i) {
  var slides = document.getElementsByClassName("slide");
  if(i > slides.length) {
    currentSlide=1;
  }
  if(i < 1) {
    currentSlide=slides.length;
  }
  var j;
  for(j=0;j<slides.length;j++){
    slides[j].style.display = "none";
  }
  slides[currentSlide-1].style.display = "block"
}

$(document).ready(function() {
  //Catch for slide 21 (applies to Managment risk and Fiscal risk dropdowns)
  $(".navbar-nav li").on("click", function(){
    if($(this).parent().parent().className == "dropdown") {
      $(this).parent().parent().addClass("active");
    }
  });

  $("button").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
  });
  $("a").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
  });

  $('body').keyup(function(e){
   if(e.keyCode == 32){
     plus(1);
     $("html, body").animate({
         scrollTop: 0
     }, 500);
   }
   if(e.keyCode == 37){
     plus(-1);
     $("html, body").animate({
         scrollTop: 0
     }, 500);
   }
   if(e.keyCode == 39){
     plus(1);
     $("html, body").animate({
         scrollTop: 0
     }, 500);
   }
 });

 if(prevSlide != currentSlide) {
   prevSlide = currentSlide;
   $(".nav").find(".active").removeClass("active");
   switch(currentSlide){
     case 1:
      $(".navbar-nav li").get(0).addClass("active");
     case 2:
      $(".navbar-nav li").get(3).addClass("active");
     case 3:
      $(".navbar-nav li").get(1).addClass("active");
     case 4:
      $(".navbar-nav li").get(2).addClass("active");
     case 5:
     case 6:
      $(".navbar-nav li").get(4).addClass("active");
     case 7:
     case 8:
     case 9:
     case 10:
     case 11:
     case 12:
      $(".navbar-nav li").get(5).addClass("active");
     case 13:
     case 14:
     case 15:
     case 16:
     case 17:
     case 18:
     case 19:
     case 20:
      $(".navbar-nav li").get(13).addClass("active");
   }
 }
});
