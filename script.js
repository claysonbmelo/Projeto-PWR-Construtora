
const header = document.querySelector("header");

/* Mede a altura real do cabeçalho (uma única vez, fora do scroll) */
function atualizarAlturaHeader() {
    document.documentElement.style.setProperty(
        "--altura-header",
        header.offsetHeight + "px"
    );
}

new ResizeObserver(atualizarAlturaHeader).observe(header);
atualizarAlturaHeader();

/* Reduz o cabeçalho com dois limites, para evitar o liga/desliga */
let reduzido = false;

function atualizarHeader() {
    const y = window.scrollY;

    if (!reduzido && y > 80) reduzido = true;
    else if (reduzido && y < 20) reduzido = false;

    header.classList.toggle("header-reduzido", reduzido);
}

window.addEventListener("scroll", atualizarHeader, { passive: true });
atualizarHeader();


const secoes = document.querySelectorAll(
  "#inicio, #empresa, #servicos, #projetos, #contato"
);

const linksMenu = document.querySelectorAll(
  'nav a[href^="#"]'
);

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        linksMenu.forEach((link) => {
          const ativo =
            link.getAttribute("href") ===
            `#${entrada.target.id}`;

          if (ativo) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  },
  {
    rootMargin: "-20% 0px -65% 0px"
  }
);

secoes.forEach((secao) => {
  observador.observe(secao);
});

