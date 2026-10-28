
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle(
        "header-reduzido",
        window.scrollY > 50
    );
});