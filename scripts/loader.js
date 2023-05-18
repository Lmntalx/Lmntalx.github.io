this.setTimeout(function(){
    document.getElementById("preloader-text").classList.add("fade-in");
}, 2000);

var loader = document.getElementById("preloader");

function fadeOut(element) {
    let opacity = 1;
    function decreaseOpacity() {
      if (opacity <= 0) {
        element.style.display = 'none';
      } else {
        element.style.opacity = opacity;
        opacity -= 0.02;
        requestAnimationFrame(decreaseOpacity);
      }
    }
    decreaseOpacity();
}

window.addEventListener("load", function(){
    this.setTimeout(function(){
        fadeOut(loader);
        this.setTimeout(function(){
            document.getElementById("body").classList.remove("scroll-disabled");
        }, 1000);
    }, 4000);
});
