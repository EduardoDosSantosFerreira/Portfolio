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
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões de contratação
    const buttons = document.querySelectorAll(".btn-block");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
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
document.addEventListener("DOMContentLoaded", function() {
    // Objeto com informações das tecnologias
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

    // Seleciona todas as imagens das tecnologias
    document.querySelectorAll(".skill-icon").forEach(icon => {
        icon.addEventListener("click", function() {
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
document.querySelector('.form-contact').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});