var slideIndex = 0;
showSlides();

function showSlides() {
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,20000);
}

// gallery
var imgDiv = document.getElementById("gallery-container")
for(i=4;i<=22;i++){
       imgDiv.innerHTML += "<div class='gallery-img'><img src='../img/gallery/"+i+".jpg' alt='' style='width: 100%;'></div>"
}

/* <div class="gallery-img"><img src="" alt=""></div> */

