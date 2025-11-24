🚀 Synco.

Global Solution - 2025/2 > Front-End Design Engineering - FIAP

📌 2. Status do Projeto

✅ Concluído (Versão Final v2.0)

📑 3. Sumário

Título e Descrição

Status do Projeto

Sumário

Sobre o Projeto

Tecnologias Utilizadas

Instalação

Como Usar

Estrutura de Pastas

Endpoints ou Rotas Principais

Autores e Créditos

Screenshots / Demonstração

Contato

💡 4. Sobre o Projeto

O Synco é uma plataforma de integração corporativa desenvolvida para resolver o problema da "troca de contexto" (context switching) no ambiente de trabalho moderno.

Atualmente, profissionais perdem horas produtivas navegando entre calendários (Google/Outlook), caixas de email e ferramentas de gestão. O Synco centraliza essas informações em uma Dashboard Unificada, permitindo:

Visualizar agendamentos de múltiplas plataformas num único lugar.

Gerir reuniões (Criar, Editar, Cancelar) de forma centralizada.

Administrar utilizadores e permissões da equipa.

Reduzir conflitos de agenda e aumentar a produtividade.

Este projeto foi desenvolvido como parte da avaliação Global Solution da disciplina de Front-End Design Engineering da FIAP.

🛠 5. Tecnologias Utilizadas

O projeto foi construído seguindo rigorosamente os requisitos da disciplina, focando em performance, arquitetura limpa e código sem dependências desnecessárias.

Linguagem: TypeScript

Framework: React (Vite)

Estilização: TailwindCSS (Exclusivo, sem CSS puro)

Roteamento: React Router Dom

Estado Global: Context API (Tema Dark/Light e Toast Notification)

Ícones: SVG Inline e Emojis Nativos (Zero bibliotecas de ícones externas)

Deploy: Vercel

⚙️ 6. Instalação

Siga os passos abaixo para rodar o projeto localmente:

# 1. Clone o repositório
git clone [https://github.com/SEU-USUARIO/synco.git](https://github.com/SEU-USUARIO/synco.git)

# 2. Entre na pasta do projeto
cd synco-gs

# 3. Instale as dependências (Limpe o cache se necessário)
npm install

# 4. Execute o projeto em modo de desenvolvimento
npm run dev


🚀 7. Como Usar

Acesso Local: Após rodar o comando acima, abra http://localhost:5173 no seu navegador.

Acesso em Produção (Deploy Vercel):
🔗 CLIQUE AQUI PARA ACESSAR O PROJETO ONLINE
https://synco-gs.vercel.app

Funcionalidades Principais:

Login: Use o botão "Entrar" na Home para acessar a área administrativa.

Dashboard: Visualize o resumo do dia e navegue pelo menu lateral.

Gestão de Reuniões: Crie, edite ou cancele reuniões na aba "Agendar" ou clicando nos detalhes.

Gestão de Usuários: Aceda ao menu "Usuários" para cadastrar ou remover membros (Integrado com API).

Tema: Use o botão ☀️/🌙 no topo para alternar entre Modo Claro e Escuro.

📂 8. Estrutura de Pastas

A arquitetura segue o padrão modular para facilitar a manutenção e escalabilidade:

src/
├── Components/    # Componentes reutilizáveis (Sidebar, Cards, Inputs)
├── Context/       # Gerenciamento de estado global (ThemeContext, ToastContext)
├── Layout/        # Estruturas de layout (Header, DashboardLayout)
├── Pages/         # Páginas da aplicação (Dashboard, Login, Detalhes, Usuários)
├── Services/      # Camada de comunicação com API (Mock e Fetch Real)
├── Types/         # Interfaces e Tipos TypeScript
└── main.tsx       # Ponto de entrada da aplicação


🛣 9. Endpoints ou Rotas Principais

Rota

Descrição

Tipo

/

Página Inicial (Landing Page)

Pública

/login

Tela de Autenticação

Pública

/dashboard

Painel principal do usuário

Privada

/reuniao/:id

Detalhes de uma reunião específica (Rota Dinâmica)

Privada

/reuniao/nova

Formulário de criação de reunião

Privada

/usuarios

Lista e gestão de usuários (CRUD API)

Privada

/integrantes

Lista dos desenvolvedores do projeto

Pública

👥 10. Autores e Créditos

Turma: 1TDS - FIAP


Nome

RM

Função

Links


Phillipo Barbosa

RM565399

Front-end & IA

githubUrl: "https://github.com/Pipo1506",
linkedinUrl: "https://www.linkedin.com/in/phillipobarbosa/"


Murilo Macedo

RM566462

Back-end Java,Python 

github: "https://github.com/MuriloMacedoSilva", 
linkedin: "https://www.linkedin.com/in/murilomacedosilvadev?utm_source=share&utm_campaign=share_via&utm_content=profi


João Victor

RM562707

Database, Software Engineering

githubUrl: "https://github.com/alc-joao",
linkedinUrl: "http://linkedin.com/in/alc-joao"

📸 11. Screenshots / Demonstração

Dashboard (Dark Mode)

Uma interface limpa e focada na produtividade.

Responsividade Mobile

O Synco funciona perfeitamente em qualquer dispositivo.

📞 12. Contato

Caso tenha dúvidas sobre a implementação, queira reportar bugs ou sugerir melhorias:

Email: philliposbarbosa@gmail.com

Repositório: (https://github.com/Pipo1506/Synco-GS)

Nota sobre a API: O projeto está configurado para consumir a API Java hospedada no Render. Em caso de instabilidade do servidor gratuito ("cold start"), o front-end possui um mecanismo de fallback robusto.

Link video youtube: https://youtu.be/C_3QAFifwNQ
# front-Synco
