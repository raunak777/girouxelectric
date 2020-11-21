

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.padding = "2px";
    document.getElementById("logo").style.height = "0px";
  } else {
    document.getElementById("navbar").style.padding = "2px";
    document.getElementById("logo").style.height = "140px";
  }
}
