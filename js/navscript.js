function adicionarNavbarAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top" data-aos="fade-down">
        <img src="img/profile_icons/crow03.png" id="icon" alt="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#about">Sobre Mim</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="projetosDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Projetos
                    </a>
                    <div class="dropdown-menu" aria-labelledby="projetosDropdown">
                        <a class="dropdown-item" href="#arduinos">Arduinos</a>
                        <a class="dropdown-item" href="#aplicativos">Aplicativos</a>
                        <a class="dropdown-item" href="#games">Games</a>
                        <a class="dropdown-item" href="#sites">Sites</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="contatoDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contato
                    </a>
                    <div class="dropdown-menu" aria-labelledby="contatoDropdown">
                        <a class="dropdown-item" href="#github">GitHub</a>
                        <a class="dropdown-item" href="#whatsapp">WhatsApp</a>
                        <a class="dropdown-item" href="#discord">Discord</a>
                        <a class="dropdown-item" href="#email">Email</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    `;

    document.body.appendChild(div);

    // Adiciona um evento de clique aos links da navbar
    document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
        item.addEventListener('click', event => {
            // Esconde a navbar
            document.querySelector('.navbar-collapse').classList.remove('show');
        });
    });
}

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

// Chama a função ao adicionar ao DOM
document.addEventListener('DOMContentLoaded', adicionarNavbarAoDOM);
