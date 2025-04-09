// Função para adicionar a navbar ao DOM com suporte para ícones
function adicionarNavbarAoDOM() {
    // Cria um elemento div
    var div = document.createElement('div');
    // Define o conteúdo HTML da div com suporte para ícones
    div.innerHTML = `
<nav class="navbar navbar-expand-lg fixed-top" id="nav" data-aos="fade-down">
    <a href="../../../index.html">
        <img src="../assets/img/profile_icons/crowico.png" id="icon" alt="Logomarca EduardoDosSantosFerreira">
    </a>
    <button class="navbar-toggler" type="button" id="toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="toggler-icon"></span>
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
        <label class="switch">
          <input checked="true" id="checkbox" type="checkbox" />
          <span class="slider">
            <div class="star star_1"></div>
            <div class="star star_2"></div>
            <div class="star star_3"></div>
            <svg viewBox="0 0 16 16" class="cloud_1 cloud">
              <path
                transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                fill="#fff"
                d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
              ></path>
            </svg>
          </span>
        </label>
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


document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("checkbox");

    // Verifica se o usuário tem uma preferência salva no localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        checkbox.checked = false; // Modo escuro: checkbox desmarcado
    } else {
        document.body.classList.remove("dark-mode");
        checkbox.checked = true; // Modo claro: checkbox marcado
    }

    checkbox.addEventListener("click", function() {
        // Alterna a classe "dark-mode" no body
        document.body.classList.toggle("dark-mode");

        // Salva a preferência do usuário no localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.removeItem("dark-mode");
        }
    });
});