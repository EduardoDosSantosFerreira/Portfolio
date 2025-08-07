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
        "TypeScript": "TypeScript é um superset do JavaScript que adiciona tipagem estática opcional, tornando o desenvolvimento mais seguro e escalável.",
        "Java": "Java é uma linguagem de programação orientada a objetos, amplamente utilizada para desenvolvimento de aplicações corporativas, web, mobile e sistemas embarcados.",
        "C#": "C# é uma linguagem moderna e orientada a objetos, amplamente utilizada para o desenvolvimento de aplicações .NET e jogos com Unity.",
        "React": "React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário reativas e eficientes, baseada em componentes.",
        "Vue.js": "Vue.js é um framework JavaScript progressivo e acessível, ideal para a construção de interfaces dinâmicas e aplicações de página única (SPA).",
        "Angular": "Angular é um framework robusto e escalável do Google para o desenvolvimento de aplicações web modernas e dinâmicas.",
        "Next.js": "Next.js é um framework React para desenvolvimento de aplicações web modernas, com renderização do lado do servidor e geração de sites estáticos.",
        "Nuxt.js": "Nuxt.js é um framework baseado em Vue.js para criação de aplicações universais, com renderização do lado do servidor e geração de sites estáticos.",
        "HTML5": "HTML5 é a versão mais recente da linguagem de marcação utilizada para estruturar e exibir conteúdos na web.",
        "CSS3": "CSS3 é a tecnologia responsável pelo design e estilização de páginas web, oferecendo recursos avançados como animações e layouts responsivos.",
        "Tailwind CSS": "Tailwind CSS é um framework CSS baseado em classes utilitárias, permitindo a construção rápida e personalizada de interfaces modernas.",
        "TailwindCSS": "Tailwind CSS é um framework CSS baseado em classes utilitárias, permitindo a construção rápida e personalizada de interfaces modernas.",
        "SASS": "Sass é um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins, otimizando a escrita de estilos.",
        "Sass": "Sass é um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins, otimizando a escrita de estilos.",
        "LESS": "LESS é um pré-processador CSS que facilita a manutenção de estilos com recursos como variáveis, mixins e funções.",
        "Bootstrap": "Bootstrap é um framework CSS popular que facilita a criação de layouts responsivos e estilizados, acelerando o desenvolvimento front-end.",
        "Material UI": "Material UI é uma biblioteca de componentes React que implementa o design system Material Design do Google.",
        "jQuery": "jQuery é uma biblioteca JavaScript rápida e concisa que simplifica a manipulação do DOM, eventos, animações e requisições AJAX.",
        "JQuery": "jQuery é uma biblioteca JavaScript rápida e concisa que simplifica a manipulação do DOM, eventos, animações e requisições AJAX.",
        "Vite": "Vite é um build tool moderno e rápido para projetos front-end, focado em desenvolvimento ágil e hot module replacement.",
        "Webpack": "Webpack é um empacotador de módulos JavaScript que permite agrupar, otimizar e servir arquivos para aplicações web.",
        // Back-End
        "Node.js": "Node.js é um ambiente de execução para JavaScript no lado do servidor, permitindo a construção de aplicações escaláveis e de alto desempenho.",
        "Express": "Express é um framework minimalista para Node.js, utilizado para criar APIs e aplicações web de forma rápida e flexível.",
        "Express.js": "Express.js é um framework web para Node.js, amplamente utilizado para criar APIs e aplicações web de maneira simples, rápida e flexível.",
        "NestJS": "NestJS é um framework Node.js progressivo para construção de aplicações eficientes, escaláveis e testáveis, utilizando TypeScript.",
        "Python": "Python é uma linguagem de programação versátil e poderosa, usada em desenvolvimento web, análise de dados, automação, IA e muito mais.",
        "Django": "Django é um framework web de alto nível para Python, que incentiva o desenvolvimento rápido e limpo de aplicações web.",
        "Flask": "Flask é um microframework para Python, leve e flexível, ideal para criar APIs e aplicações web simples.",
        "PHP": "PHP é uma linguagem de programação amplamente utilizada no desenvolvimento web, especialmente para a criação de sites dinâmicos e integração com bancos de dados.",
        "Laravel": "Laravel é um framework PHP moderno e elegante para desenvolvimento de aplicações web robustas e seguras.",
        "Symfony": "Symfony é um framework PHP flexível e reutilizável para desenvolvimento de aplicações web complexas.",
        "Ruby": "Ruby é uma linguagem de programação dinâmica e de código aberto, conhecida por sua sintaxe elegante e legibilidade.",
        "Ruby on Rails": "Ruby on Rails é um framework web para Ruby que facilita o desenvolvimento rápido de aplicações web com convenções inteligentes.",
        "Spring Boot": "Spring Boot é um framework Java que simplifica a criação de aplicações web e APIs robustas, oferecendo configuração automática e integração fácil com o ecossistema Spring.",
        ".NET": ".NET é uma plataforma de desenvolvimento da Microsoft para a criação de aplicações web, desktop, mobile e serviços, suportando múltiplas linguagens como C# e F# e oferecendo alta performance, segurança e integração com o ecossistema Microsoft.",
        "C++": "C++ é uma linguagem de alto desempenho usada no desenvolvimento de sistemas, jogos, softwares embarcados e aplicações que exigem eficiência.",
        "C": "C é uma linguagem de programação de baixo nível, altamente eficiente, utilizada em sistemas operacionais, drivers e aplicações embarcadas.",
        "Go": "Go (Golang) é uma linguagem de programação desenvolvida pelo Google, conhecida por sua simplicidade, desempenho e concorrência eficiente.",
        "Rust": "Rust é uma linguagem de programação focada em segurança, desempenho e concorrência, ideal para sistemas e aplicações de alta performance.",
        "LaTeX": "LaTeX é um sistema de preparação de documentos amplamente utilizado para a produção de textos científicos, artigos acadêmicos e livros técnicos, especialmente aqueles que contêm fórmulas matemáticas complexas.",
        // Banco de Dados
        "MySQL": "MySQL é um dos bancos de dados relacionais mais populares do mundo, conhecido por sua confiabilidade e eficiência na manipulação de dados.",
        "PostgreSQL": "PostgreSQL é um sistema gerenciador de banco de dados relacional avançado, conhecido por sua robustez, extensibilidade e conformidade com padrões SQL.",
        "SQLite": "SQLite é um banco de dados relacional leve, amplamente utilizado em aplicações embarcadas e mobile por não exigir um servidor dedicado.",
        "Oracle": "Oracle Database é um sistema de gerenciamento de banco de dados relacional corporativo, reconhecido por sua escalabilidade, segurança e recursos avançados.",
        "SQL Server": "SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft, amplamente utilizado em ambientes corporativos.",
        "MongoDB": "MongoDB é um banco de dados NoSQL orientado a documentos, ideal para armazenar e gerenciar grandes volumes de dados não estruturados.",
        "Firebase": "Firebase é uma plataforma de desenvolvimento do Google que oferece banco de dados em tempo real, autenticação, hospedagem e outras soluções para apps.",
        "Redis": "Redis é um banco de dados em memória, chave-valor, utilizado principalmente para cache, filas e armazenamento de dados temporários de alta performance.",
        "Cassandra": "Cassandra é um banco de dados NoSQL distribuído, projetado para lidar com grandes volumes de dados em múltiplos servidores, garantindo alta disponibilidade.",
        "MariaDB": "MariaDB é um sistema de gerenciamento de banco de dados relacional derivado do MySQL, conhecido por sua performance, segurança e compatibilidade.",
        "DynamoDB": "DynamoDB é um banco de dados NoSQL gerenciado pela AWS, projetado para alta disponibilidade, escalabilidade e desempenho.",
        "Elasticsearch": "Elasticsearch é um mecanismo de busca e análise distribuído, amplamente utilizado para indexação e consulta de grandes volumes de dados.",
        // Sistemas Operacionais - Windows
        "Windows NT": "Windows NT é uma família de sistemas operacionais da Microsoft voltada para ambientes corporativos e servidores, conhecida por sua arquitetura robusta e segurança aprimorada.",
        "Windows 98": "Windows 98 é um sistema operacional clássico da Microsoft, conhecido por sua interface gráfica amigável e por marcar uma geração de computadores pessoais.",
        "Windows XP": "Windows XP é um dos sistemas operacionais mais populares da Microsoft, reconhecido por sua estabilidade, interface amigável e ampla compatibilidade de softwares.",
        "Windows Vista": "Windows Vista é um sistema operacional da Microsoft lançado após o Windows XP, trazendo uma interface gráfica renovada e novos recursos de segurança.",
        "Windows 7": "Windows 7 é um sistema operacional da Microsoft reconhecido por sua estabilidade, desempenho e interface intuitiva, muito utilizado em ambientes corporativos e domésticos.",
        "Windows 8.1": "Windows 8.1 é uma versão do sistema operacional da Microsoft que introduziu uma interface moderna e integração com dispositivos touch.",
        "Windows 10": "Windows 10 é um sistema operacional da Microsoft, amplamente utilizado em desktops e notebooks, conhecido por sua interface amigável e compatibilidade com diversos softwares.",
        "Windows 11": "Windows 11 é a versão mais recente do sistema operacional da Microsoft, trazendo uma interface moderna, melhorias de desempenho e novos recursos para produtividade.",
        "Windows 1.0": "Windows 1.0 é o primeiro sistema operacional da Microsoft, lançado em 1985 e marcando o início da era dos sistemas operacionais Windows.",
        "Windows 3.1": "Windows 3.1 é um sistema operacional da Microsoft lançado em 1992, conhecido por sua interface amigável e ampla compatibilidade de softwares.",
        "Windows 95": "Windows 95 é um sistema operacional da Microsoft lançado em 1995, conhecido por sua interface amigável e ampla compatibilidade de softwares.",
        "Windows ME": "Windows ME é um sistema operacional da Microsoft lançado em 2000, conhecido por sua interface amigável e ampla compatibilidade de softwares.",
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
        "Linux Mint": "Linux Mint é uma distribuição baseada no Ubuntu e Debian, conhecida por sua facilidade de uso, estabilidade e interface amigável.",
        "SlaxOS": "Slax é uma distribuição Linux leve e portátil, projetada para rodar diretamente de dispositivos USB, ideal para uso em computadores antigos ou como sistema de recuperação.",
        "Alpine Linux": "Alpine Linux é uma distribuição Linux leve, segura e projetada para ambientes de containers e servidores.",
        // Ferramentas
        "Git": "Git é um sistema de controle de versão distribuído, essencial para o gerenciamento de código-fonte em projetos de software.",
        "GitHub": "GitHub é uma plataforma de hospedagem de código-fonte baseada em Git, com recursos de colaboração, versionamento e integração contínua.",
        "GitLab": "GitLab é uma plataforma DevOps completa para hospedagem de código, CI/CD, gerenciamento de projetos e colaboração em equipe.",
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
        "n8n": "n8n é uma ferramenta de automação de fluxos de trabalho (workflow automation) open source, permitindo integrar diferentes serviços e automatizar tarefas sem código.",
        "Yarn": "Yarn é um gerenciador de pacotes rápido, seguro e confiável para projetos JavaScript e TypeScript.",
        "npm": "npm é o gerenciador de pacotes padrão do Node.js, utilizado para instalar, compartilhar e gerenciar dependências de projetos JavaScript.",
        "pnpm": "pnpm é um gerenciador de pacotes JavaScript rápido e eficiente, que utiliza links simbólicos para economizar espaço em disco.",
        "Make": "Make é uma ferramenta de automação de compilação utilizada para gerenciar dependências e processos de build em projetos de software.",
        // Softwares
        "WebStorm": "WebStorm é um ambiente de desenvolvimento integrado (IDE) especializado em JavaScript, TypeScript e tecnologias web, oferecendo recursos avançados para produtividade.",
        "Notion": "Notion é uma plataforma de organização e produtividade que permite criar notas, gerenciar tarefas, projetos e bases de conhecimento de forma colaborativa.",
        "Slack": "Slack é uma plataforma de comunicação e colaboração para equipes, facilitando o envio de mensagens, arquivos e integração com diversas ferramentas.",
        "Trello": "Trello é uma ferramenta de gerenciamento de projetos baseada em quadros e cartões, ideal para organizar tarefas e fluxos de trabalho de forma visual.",
        "Azure DevOps": "Azure DevOps é uma plataforma da Microsoft para integração contínua, entrega contínua (CI/CD) e gerenciamento de projetos de software.",
        "Eclipse": "Eclipse é um ambiente de desenvolvimento integrado (IDE) de código aberto, amplamente utilizado para desenvolvimento em Java e outras linguagens.",
        "Xcode": "Xcode é o ambiente de desenvolvimento oficial da Apple para criação de aplicativos para iOS, macOS, watchOS e tvOS.",
        "Android Studio": "Android Studio é o IDE oficial do Google para desenvolvimento de aplicativos Android, oferecendo ferramentas avançadas de design, depuração e testes.",
        "Visual Studio": "Visual Studio é um ambiente de desenvolvimento integrado (IDE) da Microsoft, utilizado para desenvolvimento em diversas linguagens, como C#, C++ e Python.",
        "Insomnia": "Insomnia é uma ferramenta para teste e desenvolvimento de APIs REST e GraphQL, facilitando o envio de requisições e análise de respostas.",
        "Bitbucket": "Bitbucket é uma plataforma de hospedagem de código-fonte baseada em Git, com recursos de integração contínua e colaboração em equipe.",
        "GitHub Desktop": "GitHub Desktop é um aplicativo que facilita o uso do Git e do GitHub por meio de uma interface gráfica intuitiva.",
        "Fiddler": "Fiddler é uma ferramenta de proxy para depuração de tráfego HTTP/HTTPS, muito utilizada para análise de requisições e respostas em aplicações web.",
        "PostgreSQL Workbench": "PostgreSQL Workbench é uma ferramenta gráfica para administração, modelagem e consulta de bancos de dados PostgreSQL.",
        "DBeaver": "DBeaver é uma ferramenta universal de administração de bancos de dados, compatível com diversos SGBDs relacionais e NoSQL.",
        // IAs
        "ChatGPT": "ChatGPT é um modelo de linguagem de inteligência artificial desenvolvido pela OpenAI, capaz de compreender e gerar textos em linguagem natural para diversas finalidades.",
        "Gemini": "Gemini é uma inteligência artificial desenvolvida pelo Google, projetada para auxiliar em tarefas de linguagem natural, pesquisa e produtividade.",
        "Copilot": "GitHub Copilot é uma ferramenta de inteligência artificial que sugere trechos de código e auxilia desenvolvedores durante a programação.",
        "Grok": "Grok é uma inteligência artificial desenvolvida pela xAI, focada em fornecer respostas rápidas e contextualizadas, especialmente para usuários da plataforma X (antigo Twitter).",
        "Claude": "Claude é um assistente de IA desenvolvido pela Anthropic, projetado para conversação, geração de texto e auxílio em tarefas de produtividade.",
        "Bard": "Bard é um assistente de IA do Google, projetado para responder perguntas, gerar textos e auxiliar em tarefas do dia a dia.",
        // Outros
        "Power BI": "Power BI é uma plataforma de análise de dados da Microsoft, utilizada para criar dashboards interativos e relatórios empresariais.",
        "Tableau": "Tableau é uma ferramenta de visualização de dados que permite criar dashboards interativos e análises visuais avançadas.",
        "Excel": "Excel é um software de planilhas da Microsoft, amplamente utilizado para análise de dados, cálculos e automação de tarefas.",
        "Word": "Word é um processador de texto da Microsoft, utilizado para criação, edição e formatação de documentos.",
        "Photoshop": "Photoshop é um software de edição de imagens da Adobe, amplamente utilizado para design gráfico, fotografia e criação digital.",
        "Illustrator": "Illustrator é um software da Adobe para criação de ilustrações vetoriais, logotipos e design gráfico.",
        "Canva": "Canva é uma plataforma online de design gráfico, que permite criar facilmente apresentações, posts, banners e outros materiais visuais.",
        "PowerPoint": "PowerPoint é um software da Microsoft para criação de apresentações visuais, amplamente utilizado em ambientes corporativos e educacionais."
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