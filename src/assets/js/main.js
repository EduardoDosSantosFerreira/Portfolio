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
        "Java": "Java é uma linguagem de programação orientada a objetos, amplamente utilizada para desenvolvimento de aplicações corporativas, web, mobile e sistemas embarcados.",
        "C#": "C# é uma linguagem moderna e orientada a objetos, amplamente utilizada para o desenvolvimento de aplicações .NET e jogos com Unity.",
        "React": "React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário reativas e eficientes, baseada em componentes.",
        "Vue.js": "Vue.js é um framework JavaScript progressivo e acessível, ideal para a construção de interfaces dinâmicas e aplicações de página única (SPA).",
        "Angular": "Angular é um framework robusto e escalável do Google para o desenvolvimento de aplicações web modernas e dinâmicas.",
        "HTML5": "HTML5 é a versão mais recente da linguagem de marcação utilizada para estruturar e exibir conteúdos na web.",
        "CSS3": "CSS3 é a tecnologia responsável pelo design e estilização de páginas web, oferecendo recursos avançados como animações e layouts responsivos.",
        "Tailwind CSS": "Tailwind CSS é um framework CSS baseado em classes utilitárias, permitindo a construção rápida e personalizada de interfaces modernas.",
        "SASS": "Sass é um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins, otimizando a escrita de estilos.",
        "Sass": "Sass é um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins, otimizando a escrita de estilos.",
        "Bootstrap": "Bootstrap é um framework CSS popular que facilita a criação de layouts responsivos e estilizados, acelerando o desenvolvimento front-end.",
        "jQuery": "jQuery é uma biblioteca JavaScript rápida e concisa que simplifica a manipulação do DOM, eventos, animações e requisições AJAX.",
        // Adicionados conforme o front-end
        "TailwindCSS": "Tailwind CSS é um framework CSS baseado em classes utilitárias, permitindo a construção rápida e personalizada de interfaces modernas.",
        "JQuery": "jQuery é uma biblioteca JavaScript rápida e concisa que simplifica a manipulação do DOM, eventos, animações e requisições AJAX.",
        // Back-End
        "Node.js": "Node.js é um ambiente de execução para JavaScript no lado do servidor, permitindo a construção de aplicações escaláveis e de alto desempenho.",
        "Python": "Python é uma linguagem de programação versátil e poderosa, usada em desenvolvimento web, análise de dados, automação, IA e muito mais.",
        "PHP": "PHP é uma linguagem de programação amplamente utilizada no desenvolvimento web, especialmente para a criação de sites dinâmicos e integração com bancos de dados.",
        "C++": "C++ é uma linguagem de alto desempenho usada no desenvolvimento de sistemas, jogos, softwares embarcados e aplicações que exigem eficiência.",
        "C": "C é uma linguagem de programação de baixo nível, altamente eficiente, utilizada em sistemas operacionais, drivers e aplicações embarcadas.",
        "LaTeX": "LaTeX é um sistema de preparação de documentos amplamente utilizado para a produção de textos científicos, artigos acadêmicos e livros técnicos, especialmente aqueles que contêm fórmulas matemáticas complexas.",
        // Banco de Dados
        "MySQL": "MySQL é um dos bancos de dados relacionais mais populares do mundo, conhecido por sua confiabilidade e eficiência na manipulação de dados.",
        "MongoDB": "MongoDB é um banco de dados NoSQL orientado a documentos, ideal para armazenar e gerenciar grandes volumes de dados não estruturados.",
        "Firebase": "Firebase é uma plataforma de desenvolvimento do Google que oferece banco de dados em tempo real, autenticação, hospedagem e outras soluções para apps.",
        "PostgreSQL": "PostgreSQL é um sistema de gerenciamento de banco de dados relacional avançado, conhecido por sua robustez, extensibilidade e conformidade com padrões.",
        "SQLite": "SQLite é um banco de dados relacional leve, amplamente utilizado em aplicações embarcadas, mobile e desktop por sua simplicidade e portabilidade.",
        "Oracle": "Oracle Database é um sistema de gerenciamento de banco de dados relacional corporativo, reconhecido por sua escalabilidade, segurança e recursos avançados.",
        "SQL Server": "SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft, amplamente utilizado em ambientes corporativos.",
        "Redis": "Redis é um banco de dados em memória, chave-valor, utilizado principalmente como cache, fila de mensagens e armazenamento de dados temporários.",
        "MariaDB": "MariaDB é um sistema de gerenciamento de banco de dados relacional derivado do MySQL, conhecido por sua performance, segurança e compatibilidade.",
        // Sistemas Operacionais - Windows
        "Windows NT": "Windows NT é uma família de sistemas operacionais da Microsoft voltada para ambientes corporativos e servidores, conhecida por sua arquitetura robusta e segurança aprimorada.",
        "Windows 98": "Windows 98 é um sistema operacional clássico da Microsoft, conhecido por sua interface gráfica amigável e por marcar uma geração de computadores pessoais.",
        "Windows XP": "Windows XP é um dos sistemas operacionais mais populares da Microsoft, reconhecido por sua estabilidade, interface amigável e ampla compatibilidade de softwares.",
        "Windows Vista": "Windows Vista é um sistema operacional da Microsoft lançado após o Windows XP, trazendo uma interface gráfica renovada e novos recursos de segurança.",
        "Windows 7": "Windows 7 é um sistema operacional da Microsoft reconhecido por sua estabilidade, desempenho e interface intuitiva, muito utilizado em ambientes corporativos e domésticos.",
        "Windows 8.1": "Windows 8.1 é uma versão do sistema operacional da Microsoft que introduziu uma interface moderna e integração com dispositivos touch.",
        "Windows 10": "Windows 10 é um sistema operacional da Microsoft, amplamente utilizado em desktops e notebooks, conhecido por sua interface amigável e compatibilidade com diversos softwares.",
        "Windows 11": "Windows 11 é a versão mais recente do sistema operacional da Microsoft, trazendo uma interface moderna, melhorias de desempenho e novos recursos para produtividade.",
        // Sistemas Operacionais - Linux
        "Ubuntu": "Ubuntu é uma distribuição Linux popular, conhecida por sua facilidade de uso, estabilidade e grande comunidade de suporte.",
        "Debian": "Debian é uma das distribuições Linux mais antigas e estáveis, servindo de base para várias outras distribuições, incluindo o Ubuntu.",
        "CentOS": "CentOS é uma distribuição Linux baseada no Red Hat Enterprise Linux, muito utilizada em servidores devido à sua estabilidade e segurança.",
        "Red Hat": "Red Hat Enterprise Linux é uma distribuição Linux comercial voltada para ambientes corporativos, reconhecida por sua robustez e suporte profissional.",
        "Kali Linux": "Kali Linux é uma distribuição Linux voltada para testes de penetração e segurança da informação, amplamente utilizada por profissionais de segurança.",
        "Parrot OS": "Parrot OS é uma distribuição Linux focada em segurança, privacidade e desenvolvimento, muito utilizada em testes de penetração e análise forense.",
        "Arch Linux": "Arch Linux é uma distribuição Linux conhecida por sua simplicidade, flexibilidade e filosofia KISS (Keep It Simple, Stupid), ideal para usuários avançados.",
        "Fedora": "Fedora é uma distribuição Linux inovadora, patrocinada pela Red Hat, que serve como base para tecnologias de ponta e experimentação.",
        "Nix OS": "Nix OS é uma distribuição Linux inovadora que utiliza o gerenciador de pacotes Nix, oferecendo gerenciamento de dependências e ambientes reprodutíveis.",
        "Zorin OS": "Zorin OS é uma distribuição Linux baseada no Ubuntu, projetada para ser amigável a iniciantes e facilitar a transição a partir do Windows.",
        "Mint OS": "Linux Mint é uma distribuição baseada no Ubuntu e Debian, conhecida por sua facilidade de uso, estabilidade e interface amigável.",
        "SlaxOS": "Slax é uma distribuição Linux leve e portátil, projetada para rodar diretamente de dispositivos USB, ideal para uso em computadores antigos ou como sistema de recuperação.",
        // Ferramentas
        "Git": "Git é um sistema de controle de versão distribuído, essencial para o gerenciamento de código-fonte em projetos de software.",
        "Docker": "Docker é uma plataforma de containers que facilita a criação, o empacotamento e a execução de aplicações em ambientes isolados.",
        "VS Code": "Visual Studio Code é um editor de código-fonte leve e poderoso, com suporte a extensões e diversas linguagens de programação.",
        "Postman": "Postman é uma ferramenta para desenvolvimento e teste de APIs, permitindo enviar requisições e analisar respostas de forma prática.",
        "Figma": "Figma é uma ferramenta de design de interfaces colaborativa, muito utilizada para prototipagem e criação de layouts de aplicativos e sites.",
        "Jira": "Jira é uma plataforma de gerenciamento de projetos e acompanhamento de tarefas, amplamente utilizada em equipes ágeis de desenvolvimento.",
        "IntelliJ IDEA": "IntelliJ IDEA é um ambiente de desenvolvimento integrado (IDE) poderoso para desenvolvimento em Java e outras linguagens, conhecido por seus recursos inteligentes e produtividade.",
        "PyCharm": "PyCharm é um IDE especializado para desenvolvimento em Python, oferecendo ferramentas avançadas para programação, depuração e testes.",
        "Kubernetes": "Kubernetes é uma plataforma open source para orquestração de containers, automatizando a implantação, o dimensionamento e o gerenciamento de aplicações em containers.",
        "Terraform": "Terraform é uma ferramenta de infraestrutura como código (IaC) que permite criar, gerenciar e versionar recursos de infraestrutura em nuvem e on-premises.",
        "Cursor": "Cursor é um editor de código moderno com recursos de inteligência artificial, projetado para aumentar a produtividade dos desenvolvedores.",
        "n8n": "n8n é uma ferramenta de automação de fluxos de trabalho (workflow automation) open source, permitindo integrar diferentes serviços e automatizar tarefas sem código."
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