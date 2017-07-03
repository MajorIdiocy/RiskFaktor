var currentSlide = 1;
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

$( document ).ready(function() {

  $(".navbar-nav > li").click(function() {
    var navs = document.getElementsByClassName("navbar-nav").getElementsByTagName("li")
    var i;
    for(i=0;i<navs.length;i++){
      navs[i].removeClass("active");
    }
    event.target.addClass("active");
  })
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
});
