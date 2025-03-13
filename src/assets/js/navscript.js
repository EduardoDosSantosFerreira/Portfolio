// Função para adicionar a navbar ao DOM com suporte para ícones
function adicionarNavbarAoDOM() {
    // Cria um elemento div
    var div = document.createElement('div');
    // Define o conteúdo HTML da div com suporte para ícones
    div.innerHTML = `
<nav class="navbar navbar-expand-lg fixed-top" data-aos="fade-down">
    <img src="../assets/img/profile_icons/crow03.png" id="icon" alt="Logomarca EduardoDosSantosFerreira">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="../pages/home.html"><i class="fas fa-home"></i> Home</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="../pages/home.html#about"><i class="fas fa-user"></i> Sobre Mim</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="projetosDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-folder"></i> Projetos
                </a>
                <div class="dropdown-menu" aria-labelledby="projetosDropdown">
<a class="dropdown-item" href="../pages/software.html"><i class="fab fa-windows"></i> Softwares</a>
                    <a class="dropdown-item" href="../pages/sites.html"><i class="fas fa-globe"></i> Sites</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="contatoDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-envelope"></i> Contato
                </a>
                <div class="dropdown-menu" aria-labelledby="contatoDropdown">
                    <a class="dropdown-item" href="https://github.com/EduardoDosSantosFerreira"><i class="fab fa-github"></i> GitHub</a>
                    <a class="dropdown-item" href="https://wa.me/5513981492795"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <a class="dropdown-item" href="https://discord.com/users/eduardo_dsf"><i class="fab fa-discord"></i> Discord</a>
                    <a class="dropdown-item" href="mailto:eduardosferreira69@gmail.com"><i class="fas fa-envelope"></i> Email</a>
                </div>
            </li>
        </ul>
    </div>
</nav>

    `;

    // Adiciona a div ao corpo do documento
    document.body.appendChild(div);

    // Adiciona event listener para esconder a navbar quando clicar em dropdown-item ou nav-link
    document.querySelectorAll('.dropdown-item, .nav-item active').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector(".navbar").classList.add("hidden");
        });
    });
}

// Variável para armazenar a última posição de scroll
let lastScrollTop = 0;

// Adiciona event listener para o evento de scroll
window.addEventListener("scroll", function() {
    // Obtém a posição atual do scroll
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll para baixo
        document.querySelector(".navbar").classList.add("hidden");
    } else {
        // Scroll para cima
        document.querySelector(".navbar").classList.remove("hidden");
    }

    // Atualiza a última posição de scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para tratar o caso de scroll no topo
}, false);

// Chama a função ao adicionar ao DOM
document.addEventListener('DOMContentLoaded', adicionarNavbarAoDOM);