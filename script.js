/* .js files add interaction to your website */

// resource button variable
//var local = document.getElementById("local");
//local.addEventListener("click", newSource);
//function newSource () {
 // console.log("worked");
//}

//var health = document.getElementById("health");
//var jobs = document.getElementById("jobs");

var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 6 seconds
} 




