# 🚗 Maria Gasolina – Front‑End  
Interface cliente do sistema de carona compartilhada **Maria Gasolina**  

## 📋 Sobre o Projeto  
O **Maria Gasolina** é um sistema de caronas compartilhadas desenvolvido para conectar motoristas e passageiros que desejam dividir custos de combustível e contribuir para uma mobilidade mais sustentável.  
Esta é a interface **front‑end**, construída em **React + TypeScript**, responsável por oferecer uma experiência fluida, responsiva e intuitiva para o usuário.

💬 O objetivo é permitir que usuários possam se cadastrar, criar corridas, buscar caronas disponíveis e gerenciar seu perfil, interagindo com a API back‑end desenvolvida em **Node.js + NestJS**.

## 💡 Modelo de Negócio  
- **Tipo:** Marketplace  
- **Propósito:** Conectar motoristas e passageiros, com divisão justa dos custos de combustível.

## 🌟 Por que usar o Maria Gasolina?  
- 💰 **Economia:** Divida os gastos de combustível de forma justa.  
- 📍 **Conveniência:** Encontre caronas próximas ao seu trajeto em poucos cliques.  
- 🛡️ **Segurança:** Perfis verificados e sistema de avaliações entre usuários.  
- 🌱 **Sustentabilidade:** Menos carros nas ruas, menos poluição, mais mobilidade.

Com o Maria Gasolina, você não anda sozinho — faz novas conexões, economiza e ajuda o planeta.  

## 🧩 Tecnologias Utilizadas  
### Front‑end  
- React  
- TypeScript  
- Vite  
- React Router Dom  
- Axios  
- TailwindCSS 
- Context API 

### Integração  
- Comunicação com API RESTful (back‑end em NestJS)  
- Autenticação JWT (em implementação futura)  

## ⚙️ Funcionalidades Principais (Interface)  
### 👤 Usuário  
- Login e cadastro de usuários  
- Edição de perfil  
- Visualização de informações de conta  

### 🚘 Corrida  
- Listagem de corridas disponíveis  
- Visualização de detalhes de uma corrida  
- Criação de nova corrida (motorista)  
- Solicitação de carona (passageiro)  
- Cancelamento e exclusão de corrida  

### 🏷️ Categoria  
- Exibição de categorias de veículos  
- Filtros por tipo de veículo  
- Associação entre corrida e categoria  

## 🚀 Como Rodar o Projeto (Front‑end)  
### Pré‑requisitos  
- Node.js (versão 18+ recomendada)  
- npm ou yarn  
- Back‑end rodando localmente ou em ambiente remoto (ex: `http://localhost:4000`)  

### Instalação  
1. Clone este repositório:  
   ```bash
   git clone https://github.com/Commit8/maria_gasolina_react.git
   ```
2. Acesse o diretório:  
   ```bash
   cd maria_gasolina_react
   ```
3. Instale as dependências:  
   ```bash
   npm install
   ```
4. Crie o arquivo `.env` e adicione a URL da API:  
   ```bash
   VITE_API_URL=http://localhost:4000
   ```
5. Execute o servidor de desenvolvimento:  
   ```bash
   npm run dev
   ```
6. Acesse a aplicação no navegador:  
   [http://localhost:5173](http://localhost:5173)

## 🧱 Estrutura do Projeto  
```
├── public/                 # Arquivos públicos e estáticos
├── src/
│   ├── assets/             # Imagens e ícones
│   ├── components/         # Componentes reutilizáveis (botões, cards, modais)
│   ├── pages/              # Páginas principais (Login, Dashboard, Corridas, Perfil)
│   ├── services/           # Conexão com API via Axios
│   ├── context/            # Contextos globais de autenticação e tema
│   ├── hooks/              # Hooks personalizados
│   ├── utils/              # Funções auxiliares
│   ├── styles/             # Configurações de estilo
│   └── main.tsx            # Ponto de entrada da aplicação
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Próximos Passos  
- Implementar autenticação JWT.  
- Criar sistema de avaliação entre usuários.  
- Publicar front‑end em ambiente cloud (Vercel ou Netlify).  
- Implementar mapa interativo com rotas (Google Maps API).  

## Back-end
[Para acessar o back-end clique aqui](http://localhost:5173)

## 👨‍💻 Contribuidores  
- Akanni Silva  
- Dandara Nascimento  
- Gabriel Messias  
- Gabriella Parra  
- Janielle Oliveira  
- Laish Rodrigues  
- Pedro Emanuel  
- Vitor Hugo  

e projeto é de **uso educacional e sem fins lucrativos**.  
Sinta‑se livre para contribuir e aprimorar o Maria Gasolina! 🚗💨
