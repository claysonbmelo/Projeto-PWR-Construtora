
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle(
        "header-reduzido",
        window.scrollY > 50
    );

    new ResizeObserver(() => {
        document.documentElement.style.setProperty(
            '--altura-header',
            header.offsetHeight + 'px'
        );
    }).observe(header);
});


    