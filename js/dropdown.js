const button = document.querySelector(".btn");
const navMenu = document.querySelector("nav");

button.addEventListener("click", () => {
    button.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav").forEach(n => n.addEventListener("click", () => {
    button.classList.remove("active");
    navMenu.classList.remove("active");
}))