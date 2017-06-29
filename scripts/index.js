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
    $("button").click(function () {
      if(currentSlide==1 || currentSlide==7 || currentSlide==13) {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 800);
      } else {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
      }
    });
    $("a").click(function () {
      if(currentSlide==1 || currentSlide==7 || currentSlide==13) {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 800);
      } else {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
      }
    });
    $('body').keyup(function(e){
   if(e.keyCode == 32){
       plus(1);
   }
   if(e.keyCode == 37){
     plus(-1);
   }
   if(e.keyCode == 39){
       plus(1);
   }
 });
});
