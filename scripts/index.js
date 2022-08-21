const navbar = document.querySelector("header");
const homebg = document.querySelector(".homeBackground");
const menu = document.querySelector(".toggleMenu");
const links = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

/*window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);*/

/*sections.forEach((section) => {
  observer.observe(section);
});*/

ScrollReveal().reveal("header", { delay: 250 });
ScrollReveal().reveal(".homeProfilePicture", { delay: 350 });
ScrollReveal().reveal(".homeTitle", { delay: 450 });
ScrollReveal().reveal("h2", { delay: 250 });
ScrollReveal().reveal("h3", { delay: 350 });
ScrollReveal().reveal(".aboutText", { delay: 350 });
ScrollReveal().reveal(".button", { delay: 550 });
ScrollReveal().reveal(".skillTitle", { delay: 450 });
ScrollReveal().reveal(".skillTtem", { delay: 450 });
ScrollReveal().reveal(".portfolioItem", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });
