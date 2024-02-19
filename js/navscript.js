let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.querySelector(".navbar").classList.add("hidden");
    } else {
        // Scroll up
        document.querySelector(".navbar").classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para tratar o caso de scroll no topo
}, false);

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.navbar').classList.add('hidden');
    });
});

// Adiciona um evento de clique aos links da navbar
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', event => {
        // Verifica se o link não está em um dropdown
        if (!item.nextElementSibling || !item.nextElementSibling.classList.contains('dropdown-menu')) {
            // Esconde a navbar
            document.querySelector('.navbar-collapse').classList.remove('show');
        }
    });
});
