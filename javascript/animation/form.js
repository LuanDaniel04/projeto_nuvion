const form = document.querySelector(".fundo-form");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            form.classList.add("visible");
            observer.unobserve(form);
        }
    });
}, { threshold: 0.3 });

observer.observe(form);
