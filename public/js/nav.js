const header = document.querySelector('.top-bar');
const hamburger = document.querySelector('.hamburger-wrapper');

window.addEventListener("scroll", function(e) {
    if (e.currentTarget.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", function(e) {
    header.classList.toggle("active");
});
