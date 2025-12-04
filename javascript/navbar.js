window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");
    if (window.scrollY >= 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})