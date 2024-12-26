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
