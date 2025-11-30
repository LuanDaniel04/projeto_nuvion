const form = document.querySelector(".fundo-form");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            form.classList.add("visible"); //add class do css ao elemento form
            observer.unobserve(form);
        }
    });
}, { threshold: 0.3 }); //Visivel qnd chegar em 30%

observer.observe(form);
