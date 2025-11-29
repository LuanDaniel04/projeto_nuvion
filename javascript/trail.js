const cursor = document.querySelector("div.cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY - 20 + "px";
    cursor.style.left = e.pageX - 20 + "px";
})