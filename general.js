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
    document.getElementById("hOne").innerHTML = "Andalusia, Spain in Europe";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Andalusia\">Andalusia, Spain</a>";
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
    document.getElementById("hOne").innerHTML = "Andalusia, Spain in Europe";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Andalusia\">Andalusia, Spain</a>";
  }
  if (n == 2) {
    document.getElementById("hOne").innerHTML = "Tarifa, Spain in Europe";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Tarifa\">Tarifa, Spain</a>";
  }
  if (n == 3) {
    document.getElementById("hOne").innerHTML = "Tangier, Morocco in Africa";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Tangier\">Tangier, Morocco</a>";
  }
  if (n == 4) {
    document.getElementById("hOne").innerHTML = "Sahara Desert, Egypt";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Sahara\">Sahara Desert, Egypt</a>";
  }
  if (n == 5) {
    document.getElementById("hOne").innerHTML = "The Oasis in the Sahara Desert";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Oasis\">Oasis</a>";
  }
  if (n == 6) {
    document.getElementById("hOne").innerHTML = "The Egyptian Pyramids";
    document.getElementById("Para").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Egyptian_pyramids\">Egyptian Pyramids</a>";
  }
}
