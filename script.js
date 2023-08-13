var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}








function easeOut(t) {
  return 1 - Math.pow(1 - t, 4);
}

function loadingscreen(className) {
  var percentage = 0;
  var loaderInput = document.getElementById("loadingInput");
  var loaderBar = document.getElementById("loadingbar");
  var loaderContainer = document.querySelector(".loader");

  function updatePercentage() {
    var easedPercentage = easeOut(percentage / 100);
    loaderInput.innerText = Math.floor(easedPercentage * 100) + "%";

    // Set the width of the loading bar
    loaderBar.style.width = (easedPercentage * 100) + "%";

    if (percentage === 100) {
      setTimeout(function() {
        loaderContainer.classList.add(className);
      }, 1300);
    }

    if (percentage < 100) {
      percentage++;
      setTimeout(updatePercentage, 50);
    }
  }

  updatePercentage();
}

document.addEventListener("DOMContentLoaded", function() {
  loadingscreen("passAnimation"); // Pass the desired class name as an argument
});