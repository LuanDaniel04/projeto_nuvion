const cursor = document.querySelector(".cursor");
let timeout;

window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px"; 
    cursor.style.left = e.pageX + "px";
    cursor.classList.remove("hide");

    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.top = e.pageY + "px";
    trail.style.left = e.pageX + "px";
    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 600); //Deleta o rastro do mouse a cada 600ms

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        cursor.classList.add("hide");
    }, 300);  //Esconde o efeito do mouse a cada 300ms parado
});
