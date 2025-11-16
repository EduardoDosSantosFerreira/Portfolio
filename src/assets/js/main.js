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
        // Front-End
        "JavaScript": "JavaScript é uma linguagem de programação essencial para o desenvolvimento web, permitindo criar interatividade e dinamismo em páginas da internet.",
        "React": "React é uma biblioteca JavaScript para construção de interfaces de usuário reativas e baseadas em componentes.",
        "Vue.js": "Vue.js é um framework JavaScript progressivo para construção de interfaces dinâmicas e aplicações SPA.",
        "Angular": "Angular é um framework robusto do Google para desenvolvimento de aplicações web escaláveis.",
        "HTML5": "HTML5 é a linguagem de marcação usada para estruturar conteúdo na web.",
        "CSS3": "CSS3 é a tecnologia responsável pela estilização e layout de páginas web.",
        "Tailwind CSS": "Tailwind CSS é um framework utilitário para criar interfaces de forma rápida e customizável.",
        "SASS": "Sass é um pré-processador CSS que adiciona variáveis, aninhamento e mixins.",
        "Bootstrap": "Bootstrap é um framework CSS que facilita a criação de layouts responsivos.",
        "jQuery": "jQuery é uma biblioteca JavaScript para simplificar manipulação do DOM, eventos e AJAX.",

        // Back-End
        "Node.js": "Node.js é um ambiente de execução JavaScript no servidor para construir aplicações escaláveis.",
        "Express.js": "Express.js é um framework minimalista para criar APIs e aplicações web em Node.js.",
        "Python": "Python é uma linguagem versátil usada em web, automação, dados e IA.",
        "Django": "Django é um framework Python de alto nível para desenvolvimento web rápido e seguro.",
        "Flask": "Flask é um microframework Python, leve e flexível para APIs e aplicações simples.",
        "PHP": "PHP é uma linguagem amplamente utilizada para desenvolvimento web e sites dinâmicos.",

        // Banco de Dados
        "MySQL": "MySQL é um banco de dados relacional popular e confiável.",
        "PostgreSQL": "PostgreSQL é um SGBD relacional avançado e extensível.",
        "SQLite": "SQLite é um banco de dados leve embarcado, ideal para projetos pequenos.",
        "MongoDB": "MongoDB é um banco NoSQL orientado a documentos.",
        "Firebase": "Firebase oferece banco em tempo real, autenticação e outros serviços para apps.",

        // Ferramentas
        "Git": "Git é um sistema de controle de versão distribuído essencial para desenvolvimento.",
        "Docker": "Docker é uma plataforma de containers para empacotar e executar aplicações isoladas.",
        "VS Code": "Visual Studio Code é um editor de código leve e extensível.",
        "Postman": "Postman é uma ferramenta para desenvolvimento e teste de APIs.",
        "Figma": "Figma é uma ferramenta de design colaborativa para prototipagem e UI/UX.",
        "PyCharm": "PyCharm é um IDE especializado para desenvolvimento em Python.",
        "Cursor": "Cursor é um editor moderno com recursos de produtividade assistida por IA.",
        "n8n": "n8n é uma ferramenta open source de automação de fluxos de trabalho.",

        // IAs
        "ChatGPT": "ChatGPT é um modelo de linguagem da OpenAI para conversação e geração de texto.",
        "Gemini": "Gemini é uma família de modelos de IA multimodais desenvolvida pelo Google.",
        "Copilot": "GitHub Copilot é uma IA que sugere trechos de código para desenvolvedores.",
        "DeepSeek": "DeepSeek é um modelo/serviço de IA voltado para busca e análise avançada.",
        "Perplexity": "Perplexity é uma ferramenta de busca baseada em IA para respostas rápidas e contextuais.",
        "Blackbox AI": "Blackbox AI é uma plataforma de assistente de código e pesquisa para desenvolvedores.",
        "n8n AI": "n8n AI integra capacidades de IA em fluxos de automação do n8n.",
        "Grok": "Grok é uma IA focada em respostas rápidas e contextualizadas.",

        // Meus Softwares
        "CleanCrow": "CleanCrow é um software para limpeza, otimização e atualização do Windows.",
        "Crowvert": "Crowvert é um conversor de arquivos em massa com interface gráfica.",
        "Ravenizer": "Ravenizer é uma ferramenta de atualização automatizada para Windows.",
        "BruteRaven": "BruteRaven é um projeto educacional demonstrando força bruta em redes Wi‑Fi.",
        "DarkFeather": "DarkFeather é uma ferramenta para visualizar e extrair redes Wi‑Fi salvas no Windows.",
        "BlackWing": "BlackWing é um utilitário para encerrar processos travados no Windows.",
        "Coloeus": "Coloeus é uma ferramenta de gerenciamento de programas e análise de disco."
    };

    document.querySelectorAll(".skill-icon").forEach(icon => {
        icon.addEventListener("click", function () {
            const techName = this.getAttribute("data-tech");
            const techDesc = techInfo[techName] || "Descrição não disponível.";

            const labelEl = document.getElementById("techModalLabel");
            const iconEl = document.getElementById("techIcon");
            const descEl = document.getElementById("techDescription");

            if (labelEl) labelEl.textContent = techName;
            if (iconEl) iconEl.src = this.src;
            if (descEl) descEl.textContent = techDesc;

            if (typeof $ === "function" && $('#techModal').modal) {
                $('#techModal').modal('show');
            }
        });
    });
});

document.querySelector('.form-contact').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});