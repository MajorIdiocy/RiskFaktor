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

$(document).ready(function() {
  $(".navbar-nav li").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    if($(this).parent().parent().className == "dropdown") {
      $(this).parent().parent().addClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $(".btn-update").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    switch(currentSlide){
      case 1:
        $("#1").addClass("active");
        break;
      case 2:
        $("#2").addClass("active");
        break;
      case 3:
        $("#3").addClass("active");
        break;
      case 4:
        $("#4").addClass("active");
        break;
      case 5:
      case 6:
        $("#5").addClass("active");
        break;
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        $("#6").addClass("active");
        break;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
        $("#7").addClass("active");
        break;
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
 if(currentSlide==1 || currentSlide==7 || currentSlide==13){
   $(".center-content").css("background-color", "blue");
 } else {
   $(".center-content").css("background-color", "#696969");
 }
});
