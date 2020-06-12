
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("showSlides");
    var circles = document.getElementsByClassName("circle");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    circles[slideIndex - 1].className += " active";
}

//Modal 1

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//Modal 2

var modal2 = document.querySelector(".modal2");
var trigger2 = document.querySelector(".trigger2");
var closeButton2 = document.querySelector(".close-button2");

function toggleModal2() {
    modal2.classList.toggle("show-modal2");
}

function windowOnClick2(event2) {
    if (event.target === modal2) {
        toggleModal2();
    }
}

trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);



//Modal 3

var modal3 = document.querySelector(".modal3");
var trigger3 = document.querySelector(".trigger3");
var closeButton3 = document.querySelector(".close-button3");

function toggleModal3() {
    modal3.classList.toggle("show-modal3");
}

function windowOnClick3(event3) {
    if (event.target === modal3) {
        toggleModal3();
    }
}

trigger3.addEventListener("click", toggleModal3);
closeButton3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);



//Modal 4

var modal4 = document.querySelector(".modal4");
var trigger4 = document.querySelector(".trigger4");
var closeButton4 = document.querySelector(".close-button4");

function toggleModal4() {
    modal4.classList.toggle("show-modal4");
}

function windowOnClick4(event4) {
    if (event.target === modal4) {
        toggleModal4();
    }
}

trigger4.addEventListener("click", toggleModal4);
closeButton4.addEventListener("click", toggleModal4);
window.addEventListener("click", windowOnClick4);



//Modal 5

var modal5 = document.querySelector(".modal5");
var trigger5 = document.querySelector(".trigger5");
var closeButton5 = document.querySelector(".close-button5");

function toggleModal5() {
    modal5.classList.toggle("show-modal5");
}

function windowOnClick5(event5) {
    if (event.target === modal5) {
        toggleModal5();
    }
}

trigger5.addEventListener("click", toggleModal5);
closeButton5.addEventListener("click", toggleModal5);
window.addEventListener("click", windowOnClick5);



      
//Show more / show less

function myFunction() {
  var show = document.getElementById("show");
  var moreInfo = document.getElementById("more");
  var btnInfo = document.getElementById("btn");

  if (show.style.display === "none") {
    show.style.display = "inline";
    btnInfo.innerHTML = "Show more"; 
    moreInfo.style.display = "none";
  } else {
    show.style.display = "none";
    btnInfo.innerHTML = "Show less"; 
    moreInfo.style.display = "inline";
  }
}


function myFunction2() {
  var show2 = document.getElementById("show2");
  var moreInfo2 = document.getElementById("more2");
  var btnInfo2 = document.getElementById("btn2");

  if (show2.style.display === "none") {
    show2.style.display = "inline";
    btnInfo2.innerHTML = "Show more"; 
    moreInfo2.style.display = "none";
  } else {
    show2.style.display = "none";
    btnInfo2.innerHTML = "Show less"; 
    moreInfo2.style.display = "inline";
  }
}


function myFunction3() {
  var show3 = document.getElementById("show3");
  var moreInfo3 = document.getElementById("more3");
  var btnInfo3 = document.getElementById("btn3");

  if (show3.style.display === "none") {
    show3.style.display = "inline";
    btnInfo3.innerHTML = "Show more"; 
    moreInfo3.style.display = "none";
  } else {
    show3.style.display = "none";
    btnInfo3.innerHTML = "Show less"; 
    moreInfo3.style.display = "inline";
  }
}


function myFunction4() {
  var show4 = document.getElementById("show4");
  var moreInfo4 = document.getElementById("more4");
  var btnInfo4 = document.getElementById("btn4");

  if (show4.style.display === "none") {
    show4.style.display = "inline";
    btnInfo4.innerHTML = "Show more"; 
    moreInfo4.style.display = "none";
  } else {
    show4.style.display = "none";
    btnInfo4.innerHTML = "Show less"; 
    moreInfo4.style.display = "inline";
  }
}



function myFunction5() {
  var show5 = document.getElementById("show5");
  var moreInfo5 = document.getElementById("more5");
  var btnInfo5 = document.getElementById("btn5");

  if (show5.style.display === "none") {
    show5.style.display = "inline";
    btnInfo5.innerHTML = "Show more"; 
    moreInfo5.style.display = "none";
  } else {
    show5.style.display = "none";
    btnInfo5.innerHTML = "Show less"; 
    moreInfo5.style.display = "inline";
  }
}

