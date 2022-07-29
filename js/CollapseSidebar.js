function navCntrl() {
  var getWidth = document.getElementById("navigation").style.width
  if (getWidth == '0%') {
    document.getElementById("navigation").style.width = "100%";
    document.querySelector('.navCntrl i').setAttribute('class', 'fa fa-times');
  } else {
    document.getElementById("navigation").style.width = "0%";
    document.querySelector('.navCntrl i').setAttribute('class', 'fa fa-bars');
  }
}



//Get the button
var mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.right = "0";
  } else {
    mybutton.style.right = "-100px";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}