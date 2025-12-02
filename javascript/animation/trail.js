const cursor = document.querySelector(".cursor");
let timeout;

let lastX = null;
let lastY = null;

window.addEventListener("mousemove", (e) => {
    const x = e.pageX;
    const y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.classList.remove("hide");

    // Primeira vez: sem interpolar
    if (lastX === null) {
        createTrail(x, y);
        lastX = x;
        lastY = y;
        return;
    }

    const dx = x - lastX;
    const dy = y - lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Quanto menor o step, mais suave o trail
    const step = 12;

    // Quantas partículas criar para preencher o caminho
    const steps = Math.max(1, Math.floor(distance / step));

    for (let i = 0; i < steps; i++) {
        const px = lastX + (dx * i) / steps;
        const py = lastY + (dy * i) / steps;
        createTrail(px, py);
    }

    lastX = x;
    lastY = y;

    clearTimeout(timeout);
    timeout = setTimeout(() => cursor.classList.add("hide"), 200);
});

function createTrail(x, y) {
    const t = document.createElement("div");
    t.classList.add("trail");
    t.style.left = x + "px";
    t.style.top = y + "px";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 300);
}
