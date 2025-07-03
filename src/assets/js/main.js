const previewButton = document.getElementById("preview-button");
const resumePreview = document.getElementById("resume-preview");
let isPreviewing = false;

previewButton.addEventListener("click", () => {
    if (!isPreviewing) {
        resumePreview.style.display = "block";
        previewButton.textContent = "Fechar Pré-visualização";
    } else {
        resumePreview.style.display = "none";
        previewButton.textContent = "Pré-visualizar Currículo";
    }
    isPreviewing = !isPreviewing;
});

const categoriaLinks = document.querySelectorAll('.categoria-link');
const projetos = document.querySelectorAll('#projetos > div');

categoriaLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const categoria = link.getAttribute('data-categoria');

        projetos.forEach(projeto => {
            if (projeto.id === `projetos-${categoria}`) {
                projeto.style.opacity = '0';
                projeto.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    projeto.style.display = 'block';
                    setTimeout(() => {
                        projeto.style.opacity = '1';
                    }, 50);
                }, 500);
            } else {
                projeto.style.opacity = '0';
                setTimeout(() => {
                    projeto.style.display = 'none';
                }, 500);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-block");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const serviceName = this.closest("div").querySelector(".card-title").textContent.trim();

            const phoneNumber = "5513981492795";

            const message = `Olá! Estou interessado no plano de serviço ${serviceName}. Poderia me fornecer mais informações?`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, "_blank");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const techInfo = {
        "JavaScript": "JavaScript é uma linguagem de programação essencial para o desenvolvimento web, permitindo criar interatividade e dinamismo em páginas da internet.",
        "React": "React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário reativas e eficientes, baseada em componentes.",
        "Vue.js": "Vue.js é um framework JavaScript progressivo e acessível, ideal para a construção de interfaces dinâmicas e aplicações de página única (SPA).",
        "Angular": "Angular é um framework robusto e escalável do Google para o desenvolvimento de aplicações web modernas e dinâmicas.",
        "Bootstrap": "Bootstrap é um framework CSS popular que facilita a criação de layouts responsivos e estilizados, acelerando o desenvolvimento front-end.",
        "HTML5": "HTML5 é a versão mais recente da linguagem de marcação utilizada para estruturar e exibir conteúdos na web.",
        "CSS3": "CSS3 é a tecnologia responsável pelo design e estilização de páginas web, oferecendo recursos avançados como animações e layouts responsivos.",
        "Tailwind CSS": "Tailwind CSS é um framework CSS baseado em classes utilitárias, permitindo a construção rápida e personalizada de interfaces modernas.",
        "Sass": "Sass é um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins, otimizando a escrita de estilos.",
        "Node.js": "Node.js é um ambiente de execução para JavaScript no lado do servidor, permitindo a construção de aplicações escaláveis e de alto desempenho.",
        "PHP": "PHP é uma linguagem de programação amplamente utilizada no desenvolvimento web, especialmente para a criação de sites dinâmicos e integração com bancos de dados.",
        "Python": "Python é uma linguagem de programação versátil e poderosa, usada em desenvolvimento web, análise de dados, automação, IA e muito mais.",
        "C++": "C++ é uma linguagem de alto desempenho usada no desenvolvimento de sistemas, jogos, softwares embarcados e aplicações que exigem eficiência.",
        "C": "C é uma linguagem de programação de baixo nível, altamente eficiente, utilizada em sistemas operacionais, drivers e aplicações embarcadas.",
        "C#": "C# é uma linguagem moderna e orientada a objetos, amplamente utilizada para o desenvolvimento de aplicações .NET e jogos com Unity.",
        "MySQL": "MySQL é um dos bancos de dados relacionais mais populares do mundo, conhecido por sua confiabilidade e eficiência na manipulação de dados.",
        "Firebase": "Firebase é uma plataforma de desenvolvimento do Google que oferece banco de dados em tempo real, autenticação, hospedagem e outras soluções para apps.",
        "MongoDB": "MongoDB é um banco de dados NoSQL orientado a documentos, ideal para armazenar e gerenciar grandes volumes de dados não estruturados.",
        "TeX": "TeX é um sistema avançado para composição de textos científicos e matemáticos, amplamente usado na produção de artigos acadêmicos e livros técnicos."

    };

    document.querySelectorAll(".skill-icon").forEach(icon => {
        icon.addEventListener("click", function () {
            const techName = this.getAttribute("data-tech");
            const techDesc = techInfo[techName] || "Descrição não disponível.";

            document.getElementById("techModalLabel").textContent = techName;
            document.getElementById("techIcon").src = this.src;
            document.getElementById("techDescription").textContent = techDesc;

            $('#techModal').modal('show');
        });
    });
});

document.querySelector('.form-contact').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});