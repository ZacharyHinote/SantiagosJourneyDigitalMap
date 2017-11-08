var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  } 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  if (n == 1) {
    document.getElementById("hOne").innerHTML = "Spain, Andalusia";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Andalusia\">Spain, Andalusia</a>";
  }
  if (n == 2) {
    document.getElementById("hOne").innerHTML = "Spain, Tarifa";
    
  }
  if (n == 3) {
    document.getElementById("hOne").innerHTML = "Africa, Tangier";
  }
  if (n == 4) {
    document.getElementById("hOne").innerHTML = "Sahara Desert, Egypt";
  }
  if (n == 5) {
    document.getElementById("hOne").innerHTML = "The Oasis in the Sahara Desert";
  }
  if (n == 6) {
    document.getElementById("hOne").innerHTML = "The Egyptian Pyramids";
  }
}
