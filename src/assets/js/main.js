// Seleciona o botão de pré-visualização do currículo pelo seu ID
const previewButton = document.getElementById("preview-button");
// Seleciona o elemento iframe de pré-visualização do currículo pelo seu ID
const resumePreview = document.getElementById("resume-preview");
// Variável para controlar o estado de pré-visualização
let isPreviewing = false;

// Adiciona um evento de clique ao botão de pré-visualização
previewButton.addEventListener("click", () => {
    // Verifica se a pré-visualização não está ativa
    if (!isPreviewing) {
        // Exibe o iframe de pré-visualização
        resumePreview.style.display = "block";
        // Altera o texto do botão para indicar que a pré-visualização pode ser fechada
        previewButton.textContent = "Fechar Pré-visualização";
    } else {
        // Oculta o iframe de pré-visualização
        resumePreview.style.display = "none";
        // Altera o texto do botão para indicar que a pré-visualização pode ser aberta
        previewButton.textContent = "Pré-visualizar Currículo";
    }
    // Alterna o estado de pré-visualização
    isPreviewing = !isPreviewing;
});

// Seleciona todos os links de categoria pelo seletor de classe
const categoriaLinks = document.querySelectorAll('.categoria-link');
// Seleciona todos os elementos de projeto dentro do contêiner de projetos
const projetos = document.querySelectorAll('#projetos > div');

// Adiciona um evento de clique a cada link de categoria
categoriaLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Previne o comportamento padrão do link
        event.preventDefault();
        // Obtém o valor do atributo data-categoria do link clicado
        const categoria = link.getAttribute('data-categoria');

        // Itera sobre cada projeto
        projetos.forEach(projeto => {
            // Verifica se o ID do projeto corresponde à categoria selecionada
            if (projeto.id === `projetos-${categoria}`) {
                // Define a opacidade do projeto para 0 para iniciar a transição
                projeto.style.opacity = '0';
                // Define a transição de opacidade
                projeto.style.transition = 'opacity 0.5s';
                // Após 500ms, exibe o projeto e inicia a transição de opacidade para 1
                setTimeout(() => {
                    projeto.style.display = 'block';
                    setTimeout(() => {
                        projeto.style.opacity = '1';
                    }, 50);
                }, 500);
            } else {
                // Define a opacidade do projeto para 0 para iniciar a transição
                projeto.style.opacity = '0';
                // Após 500ms, oculta o projeto
                setTimeout(() => {
                    projeto.style.display = 'none';
                }, 500);
            }
        });
    });
});

// Botões de Contratação:
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões de contratação
    const buttons = document.querySelectorAll(".btn-block");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Obtém o nome do serviço associado ao botão
            const serviceName = this.closest("div").querySelector(".card-title").textContent.trim();

            // Número do WhatsApp
            const phoneNumber = "5513981492795";

            // Mensagem personalizada
            const message = `Olá! Estou interessado no plano de serviço ${serviceName}. Poderia me fornecer mais informações?`;

            // Criando o link do WhatsApp com a mensagem codificada corretamente
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Redireciona para o WhatsApp
            window.open(whatsappUrl, "_blank");
        });
    });
});

// Info Tecnologias usadas no modal:
document.addEventListener("DOMContentLoaded", function () {
    // Objeto com informações das tecnologias
    const techInfo = {
        "JavaScript": "JavaScript é uma linguagem de programação usada para criar interatividade em sites.",
        "React": "React é uma biblioteca JavaScript para criar interfaces de usuário dinâmicas.",
        "Vue.js": "Vue.js é um framework JavaScript progressivo para construção de interfaces.",
        "Angular": "Angular é uma plataforma para desenvolvimento de aplicações web dinâmicas.",
        "Bootstrap": "Bootstrap é um framework CSS para criar layouts responsivos.",
        "HTML5": "HTML5 é a linguagem de marcação usada para estruturar páginas da web.",
        "CSS3": "CSS3 é a linguagem de estilos usada para estilizar páginas web.",
        "Tailwind CSS": "Tailwind CSS é um framework CSS utilitário para construção rápida de interfaces modernas.",
        "Sass": "Sass é um pré-processador CSS que adiciona funcionalidades como variáveis e mixins.",
        "Node.js": "Node.js é um ambiente de execução para JavaScript no servidor.",
        "PHP": "PHP é uma linguagem de programação usada para desenvolvimento web.",
        "Python": "Python é uma linguagem de programação versátil, usada em diversos contextos.",
        "C++": "C++ é uma linguagem poderosa usada em software de alto desempenho.",
        "C": "C é uma linguagem de programação de baixo nível, usada em sistemas operacionais.",
        "C#": "C# é uma linguagem usada no desenvolvimento de aplicações .NET.",
        "MySQL": "MySQL é um sistema de gerenciamento de banco de dados relacional.",
        "Firebase": "Firebase é uma plataforma de banco de dados e serviços em nuvem do Google.",
        "MongoDB": "MongoDB é um banco de dados NoSQL orientado a documentos, utilizado para armazenar grandes volumes de dados não estruturados.",
        "TeX": "TeX é um sistema de preparação de documentos de alta qualidade, amplamente utilizado para a criação de textos científicos e matemáticos."

    };

    // Seleciona todas as imagens das tecnologias
    document.querySelectorAll(".skill-icon").forEach(icon => {
        icon.addEventListener("click", function () {
            const techName = this.getAttribute("data-tech");
            const techDesc = techInfo[techName] || "Descrição não disponível.";

            // Atualiza o modal
            document.getElementById("techModalLabel").textContent = techName;
            document.getElementById("techIcon").src = this.src;
            document.getElementById("techDescription").textContent = techDesc;

            // Exibe o modal
            $('#techModal').modal('show');
        });
    });
});


// Mensagem Contato
document.querySelector('.form-contact').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});