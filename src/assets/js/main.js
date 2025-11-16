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
        "MongoDB": "MongoDB é um banco de dados NoSQL orientado a documentos, ideal para armazenar e gerenciar grandes volumes de dados não estruturados.",
        "Firebase": "Firebase é uma plataforma de desenvolvimento do Google que oferece banco de dados em tempo real, autenticação, hospedagem e outras soluções para apps.",
        // Sistemas Operacionais - Windows
        "Windows 7": "Windows 7 é um sistema operacional da Microsoft reconhecido por sua estabilidade, desempenho e interface intuitiva, muito utilizado em ambientes corporativos e domésticos.",
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
        "Copilot": "GitHub Copilot é uma ferramenta de inteligência artificial que sugere trechos de código e auxilia desenvolvedores durante a programação.",
        "Grok": "Grok é uma inteligência artificial desenvolvida pela xAI, focada em fornecer respostas rápidas e contextualizadas, especialmente para usuários da plataforma X (antigo Twitter).",
        "Claude": "Claude é um assistente de IA desenvolvido pela Anthropic, projetado para conversação, geração de texto e auxílio em tarefas de produtividade.",
        "DeepSeek": "DeepSeek é um modelo de inteligência artificial desenvolvido pela DeepSeek, focado em análise profunda e raciocínio complexo para aplicações técnicas e de pesquisa.",
        // Outros
        "Power BI": "Power BI é uma plataforma de análise de dados da Microsoft, utilizada para criar dashboards interativos e relatórios empresariais.",
        "Tableau": "Tableau é uma ferramenta de visualização de dados que permite criar dashboards interativos e análises visuais avançadas.",
        "Excel": "Excel é um software de planilhas da Microsoft, amplamente utilizado para análise de dados, cálculos e automação de tarefas.",
        "Word": "Word é um processador de texto da Microsoft, utilizado para criação, edição e formatação de documentos.",
        "Photoshop": "Photoshop é um software de edição de imagens da Adobe, amplamente utilizado para design gráfico, fotografia e criação digital.",
        "Illustrator": "Illustrator é um software da Adobe para criação de ilustrações vetoriais, logotipos e design gráfico.",
        "Canva": "Canva é uma plataforma online de design gráfico, que permite criar facilmente apresentações, posts, banners e outros materiais visuais.",
        "PowerPoint": "PowerPoint é um software da Microsoft para criação de apresentações visuais, amplamente utilizado em ambientes corporativos e educacionais.",

        // Adicionados do HTML (faltantes)
        "Astro": "Astro é um framework moderno para construção de sites rápidos, focado em entregar apenas o necessário ao navegador e suportando múltiplos frameworks de UI.",
        "Prisma": "Prisma é um ORM (Object-Relational Mapping) para Node.js e TypeScript, facilitando o acesso e manipulação de bancos de dados de forma segura e eficiente.",
        "Supabase": "Supabase é uma alternativa open source ao Firebase, oferecendo banco de dados, autenticação, storage e APIs em tempo real.",
        "Framer Motion": "Framer Motion é uma biblioteca de animações para React, permitindo criar animações e transições fluidas de forma simples e declarativa.",
        "Framer": "Framer é uma plataforma de design e prototipagem interativa, permitindo criar interfaces e animações avançadas para web e mobile.",
        "Shadcn UI": "Shadcn UI é uma coleção de componentes React acessíveis e personalizáveis, baseada em Radix UI e Tailwind CSS.",
        "Radix UI": "Radix UI é uma biblioteca de componentes acessíveis e sem estilos para React, focada em acessibilidade e interoperabilidade.",
        "Zustand": "Zustand é uma biblioteca leve de gerenciamento de estado para React, baseada em hooks e com API simples.",
        "TanStack Query": "TanStack Query (anteriormente React Query) é uma biblioteca para gerenciamento de dados assíncronos e cache em aplicações React.",
        "TanStack Table": "TanStack Table (anteriormente React Table) é uma biblioteca para criação de tabelas dinâmicas e altamente customizáveis em React.",
        "TanStack": "TanStack é um conjunto de bibliotecas para React, incluindo Query, Table, Virtual, Router e Form, focadas em gerenciamento de dados e UI.",
        "Zod": "Zod é uma biblioteca TypeScript para validação de esquemas e parsing de dados, com tipagem estática e integração com formulários.",
        "React Hook Form": "React Hook Form é uma biblioteca para gerenciamento de formulários em React, focada em performance e fácil integração com validação.",
        "React Router": "React Router é uma biblioteca de roteamento para aplicações React, permitindo navegação entre páginas e rotas dinâmicas.",
        "Redux": "Redux é uma biblioteca de gerenciamento de estado previsível para aplicações JavaScript, frequentemente usada com React.",
        "Redux Toolkit": "Redux Toolkit é a abordagem oficial e recomendada para escrever lógica Redux moderna, simplificando a configuração e o uso do Redux.",
        "Jest": "Jest é um framework de testes em JavaScript, amplamente utilizado para testar aplicações React e Node.js.",
        "Testing Library": "Testing Library é uma família de bibliotecas para testes de componentes de UI, focada em testes baseados no comportamento do usuário.",
        "Cypress": "Cypress é uma ferramenta de teste end-to-end para aplicações web, permitindo automação de testes de interface de forma rápida e confiável.",
        "Vitest": "Vitest é um framework de testes rápido e moderno para projetos front-end, inspirado no Jest e integrado ao Vite.",
        "Storybook": "Storybook é uma ferramenta para desenvolvimento isolado e documentação de componentes de UI, facilitando testes e colaboração.",
        "Vercel": "Vercel é uma plataforma de hospedagem focada em aplicações front-end modernas, com deploy contínuo e integração com frameworks como Next.js.",
        "Netlify": "Netlify é uma plataforma de hospedagem para sites estáticos e aplicações front-end, com CI/CD integrado e recursos de serverless.",
        "Render": "Render é uma plataforma de cloud para deploy de aplicações web, APIs, bancos de dados e serviços estáticos de forma simples.",
        "Railway": "Railway é uma plataforma de deploy e infraestrutura para aplicações modernas, facilitando o provisionamento de bancos de dados e serviços.",
        "PlanetScale": "PlanetScale é um banco de dados MySQL escalável na nuvem, baseado em Vitess, ideal para aplicações modernas e distribuídas.",
        "Clerk": "Clerk é uma solução de autenticação e gerenciamento de usuários para aplicações web modernas, com integração fácil em React, Next.js e outros frameworks.",
        "Auth0": "Auth0 é uma plataforma de autenticação e autorização como serviço, facilitando a implementação de login seguro em aplicações web e mobile.",
        "Stripe": "Stripe é uma plataforma de pagamentos online, oferecendo APIs para processamento de pagamentos, assinaturas e gerenciamento financeiro.",
        "Lucia": "Lucia é uma biblioteca de autenticação simples e flexível para aplicações JavaScript e TypeScript.",
        "OpenAI": "OpenAI é uma organização de pesquisa em inteligência artificial, criadora de modelos como GPT-3, GPT-4 e DALL-E.",
        "Vercel AI SDK": "Vercel AI SDK é um conjunto de ferramentas para integrar recursos de IA em aplicações web, especialmente com Vercel e Next.js.",
        "LangChain": "LangChain é uma biblioteca para construção de aplicações de IA baseadas em linguagem natural, integrando LLMs, agentes e ferramentas externas.",
        "Replicate": "Replicate é uma plataforma para executar e hospedar modelos de IA open source via API.",
        "Whisper": "Whisper é um modelo de transcrição automática de áudio para texto desenvolvido pela OpenAI.",
        "DALL-E": "DALL-E é um modelo de geração de imagens a partir de texto desenvolvido pela OpenAI.",
        "Stable Diffusion": "Stable Diffusion é um modelo de geração de imagens open source baseado em inteligência artificial.",
        "Midjourney": "Midjourney é uma plataforma de geração de imagens por IA, focada em criatividade e arte digital.",
        "Google Gemini": "Google Gemini é uma família de modelos de IA multimodais desenvolvidos pelo Google, para tarefas de linguagem, imagem e código.",
        "Anthropic": "Anthropic é uma empresa de IA responsável pelo desenvolvimento do modelo Claude.",
        "Claude 3": "Claude 3 é a terceira geração do modelo de linguagem da Anthropic, focado em segurança, performance e compreensão contextual.",
        "Claude 2": "Claude 2 é a segunda geração do modelo de linguagem da Anthropic, com melhorias em compreensão e geração de texto.",
        "OpenCV": "OpenCV é uma biblioteca open source para visão computacional e processamento de imagens.",
        "Pandas": "Pandas é uma biblioteca Python para análise e manipulação de dados, muito utilizada em ciência de dados.",
        "Matplotlib": "Matplotlib é uma biblioteca Python para criação de gráficos e visualizações de dados.",
        "Seaborn": "Seaborn é uma biblioteca Python baseada em Matplotlib para visualização estatística de dados.",
        "Scikit-learn": "Scikit-learn é uma biblioteca Python para machine learning, oferecendo algoritmos e ferramentas para análise de dados.",
        "TensorFlow": "TensorFlow é uma biblioteca open source para machine learning e deep learning desenvolvida pelo Google.",
        "PyTorch": "PyTorch é uma biblioteca open source para machine learning e deep learning desenvolvida pelo Facebook.",
        "Keras": "Keras é uma API de alto nível para redes neurais, rodando sobre TensorFlow, Theano ou CNTK.",
        "FastAPI": "FastAPI é um framework web moderno e rápido para construção de APIs com Python, baseado em tipagem e validação automática.",
        "tRPC": "tRPC é uma biblioteca para construção de APIs typesafe em aplicações TypeScript/Node.js, sem necessidade de geração de código.",
        "Socket.io": "Socket.io é uma biblioteca para comunicação em tempo real entre cliente e servidor via WebSockets.",
        "WebSocket": "WebSocket é um protocolo de comunicação bidirecional em tempo real entre cliente e servidor.",
        "RabbitMQ": "RabbitMQ é um broker de mensagens open source para comunicação assíncrona entre sistemas.",
        "Kafka": "Kafka é uma plataforma distribuída de streaming de eventos e mensagens, desenvolvida pela Apache.",
        "PM2": "PM2 é um gerenciador de processos para aplicações Node.js, facilitando deploy, monitoramento e escalabilidade.",
        "Nginx": "Nginx é um servidor web e proxy reverso de alta performance, utilizado para servir aplicações web e balancear carga.",
        "Apache": "Apache HTTP Server é um dos servidores web mais populares do mundo, conhecido por sua robustez e flexibilidade.",
        "Cloudflare": "Cloudflare é uma plataforma de CDN, segurança e performance para sites e aplicações web.",
        "AWS": "Amazon Web Services (AWS) é a maior plataforma de serviços de computação em nuvem do mundo.",
        "GCP": "Google Cloud Platform (GCP) é a plataforma de serviços de nuvem do Google.",
        "Azure": "Microsoft Azure é a plataforma de nuvem da Microsoft para hospedagem, bancos de dados, IA e mais.",
        "DigitalOcean": "DigitalOcean é uma plataforma de cloud focada em simplicidade e desenvolvedores, oferecendo VPS, bancos de dados e storage.",
        "Heroku": "Heroku é uma plataforma de cloud para deploy de aplicações web, APIs e bancos de dados de forma simples.",
        "Render.com": "Render é uma plataforma de cloud para deploy de aplicações web, APIs, bancos de dados e serviços estáticos de forma simples.",
        "Railway.app": "Railway é uma plataforma de deploy e infraestrutura para aplicações modernas, facilitando o provisionamento de bancos de dados e serviços.",
        "PlanetScale.com": "PlanetScale é um banco de dados MySQL escalável na nuvem, baseado em Vitess, ideal para aplicações modernas e distribuídas.",
        "Supabase.io": "Supabase é uma alternativa open source ao Firebase, oferecendo banco de dados, autenticação, storage e APIs em tempo real.",
        "Prisma.io": "Prisma é um ORM (Object-Relational Mapping) para Node.js e TypeScript, facilitando o acesso e manipulação de bancos de dados de forma segura e eficiente.",
        "Astro.build": "Astro é um framework moderno para construção de sites rápidos, focado em entregar apenas o necessário ao navegador e suportando múltiplos frameworks de UI.",
        // Meus Softwares
        "CleanCrow": "CleanCrow é um software para limpeza, otimização e atualização do sistema operacional Windows.",
        "Crowvert": "Crowvert é um conversor de arquivos em massa com interface gráfica, facilitando a transformação de múltiplos formatos.",
        "Ravenizer": "Ravenizer é uma ferramenta de atualização automatizada para Windows, utilizando winget e Chocolatey para manter o sistema e aplicativos sempre atualizados.",
        "BruteRaven": "BruteRaven é um projeto educacional que demonstra força bruta em redes Wi-Fi, com interface gráfica em Tkinter e motor pywifi.",
        "DarkFeather": "DarkFeather é uma ferramenta gráfica para visualizar e extrair informações detalhadas das redes Wi-Fi salvas no Windows.",
        "BlackWing": "BlackWing é um killer de processos do Windows, permitindo encerrar processos travados com facilidade e segurança.",
        "Coloeus": "Coloeus é uma ferramenta para gerenciamento de programas instalados, análise de arquivos, uso de disco e permissões administrativas no Windows.",
        // Design
        "Figma": "Figma é uma ferramenta de design de interface colaborativa baseada na nuvem, ideal para criação de protótipos, wireframes e design de UI/UX.",
        "Adobe XD": "Adobe XD é uma ferramenta da Adobe para design e prototipagem de interfaces de usuário para web e mobile.",
        "Photoshop": "Adobe Photoshop é o software líder mundial em edição e manipulação de imagens, muito utilizado em design gráfico e fotografia.",
        "Illustrator": "Adobe Illustrator é um software de design vetorial utilizado para criação de logotipos, ilustrações e artes gráficas.",
        "InDesign": "Adobe InDesign é uma ferramenta profissional para diagramação e criação de materiais gráficos como revistas, livros e panfletos.",
        "Canva": "Canva é uma plataforma online de design gráfico fácil de usar, ideal para criar posts, apresentações, banners e outros materiais visuais.",
        "Sketch": "Sketch é uma ferramenta de design vetorial focada em interfaces digitais, muito utilizada para design de aplicativos e websites no macOS.",
        "CorelDRAW": "CorelDRAW é um software de design gráfico vetorial amplamente utilizado para criação de ilustrações, logotipos e layouts.",
        "GIMP": "GIMP é um editor de imagens open source, alternativa gratuita ao Photoshop, com recursos avançados de manipulação de imagens.",
        "Inkscape": "Inkscape é um editor de gráficos vetoriais open source, ideal para criação de ilustrações, logotipos e artes em SVG.",
        // Softwares de Escritório
        "Word": "Microsoft Word é um processador de texto amplamente utilizado para criação, edição e formatação de documentos.",
        "Excel": "Microsoft Excel é um software de planilhas utilizado para análise de dados, cálculos, gráficos e automação de tarefas.",
        "PowerPoint": "Microsoft PowerPoint é um programa para criação de apresentações visuais, muito usado em reuniões, aulas e eventos.",
        "Google Docs": "Google Docs é um editor de texto online colaborativo do Google, permitindo criação e edição de documentos em tempo real.",
        "Google Sheets": "Google Sheets é uma ferramenta de planilhas online do Google, ideal para colaboração e análise de dados na nuvem.",
        "Google Slides": "Google Slides é um aplicativo online do Google para criação e edição de apresentações colaborativas.",
        "LibreOffice Writer": "LibreOffice Writer é o processador de texto do pacote LibreOffice, gratuito e open source, compatível com vários formatos.",
        "LibreOffice Calc": "LibreOffice Calc é o software de planilhas do LibreOffice, gratuito e open source, com recursos avançados de análise de dados.",
        "LibreOffice Impress": "LibreOffice Impress é o programa de apresentações do LibreOffice, gratuito e open source, compatível com arquivos do PowerPoint.",
        "WPS Office": "WPS Office é uma suíte de escritório gratuita e multiplataforma, compatível com documentos do Microsoft Office.",
        "OnlyOffice": "OnlyOffice é uma suíte de escritório colaborativa, open source, com editores de texto, planilhas e apresentações integrados.",
        // Embarcados
        "Arduino": "Arduino é uma plataforma de prototipagem eletrônica open source baseada em hardware e software fáceis de usar, ideal para projetos de automação e IoT.",
        "ESP32": "ESP32 é um microcontrolador da Espressif com Wi-Fi e Bluetooth integrados, muito utilizado em projetos de IoT e automação.",
        "Raspberry Pi": "Raspberry Pi é um computador de placa única de baixo custo, utilizado em educação, automação, robótica e projetos de computação embarcada.",
        "STM32": "STM32 é uma família de microcontroladores ARM Cortex-M da STMicroelectronics, amplamente utilizada em sistemas embarcados industriais e automotivos.",
        "ESP8266": "ESP8266 é um microcontrolador com Wi-Fi integrado, popular em projetos de automação residencial e IoT devido ao seu baixo custo.",
        "NodeMCU": "NodeMCU é uma placa de desenvolvimento baseada no ESP8266, com suporte a Lua e fácil integração para projetos de IoT.",
        "Orange Pi": "Orange Pi é uma série de computadores de placa única compatíveis com Linux, alternativa ao Raspberry Pi para projetos embarcados.",
        "Jetson Nano": "Jetson Nano é uma plataforma da NVIDIA para computação embarcada com IA, ideal para projetos de visão computacional e robótica.",
        "MSP430": "MSP430 é uma família de microcontroladores de baixo consumo da Texas Instruments, utilizada em aplicações portáteis e embarcadas."
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