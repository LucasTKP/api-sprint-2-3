# 🌍 Projeto MinutoNews API

A ***MinutoNews API*** é uma API desenvolvida em JavaScript/Node.js com integração em Docker, hospedada na AWS, para extrair informações em formato RSS do site "Notícias ao Minuto". O conteúdo extraído é salvo em arquivos JSON dentro de um bucket S3, e o projeto também inclui uma página HTML para consultar e exibir o conteúdo salvo.

<img src="https://cdn.noticiasaominuto.com.br/img/svg/logos/logonoticias.svg" alt="Logo" style="width: 50%;">


## 📌 Sobre o site escolhido

"Notícias ao Minuto" é um portal de notícias que oferece uma ampla cobertura de eventos nacionais e internacionais. A API deste projeto irá extrair as principais notícias publicadas no site através do feed RSS do "Notícias ao Minuto".

- **Site oficial:** [Notícias ao Minuto](https://www.noticiasaominuto.com.br/)
- **Feed RSS:** [Notícias ao Minuto RSS](https://www.noticiasaominuto.com.br/rss)

## 🎯 Objetivos do Projeto

1. Extrair dados de RSS do site "Notícias ao Minuto".
2. Salvar o conteúdo extraído em formato JSON no S3 da AWS.
3. Consultar e exibir os dados salvos por meio de uma página HTML hospedada na cloud.

## 🎬 Demonstração

Abaixo estão algumas imagens e descrições que mostram como a **MinutoNews API** funciona:

### 🌐 Interface Web

A página principal do projeto permite que você visualize as notícias mais recentes extraídas do feed RSS do "Notícias ao Minuto". A interface exibe as informações de forma clara e organizada, possibilitando a consulta aos dados que foram salvos no sistema.

![Página Principal](/frontend/src/public/img/Print1.png)

A página de "Últimas Notícias" apresenta as notícias mais recentes extraídas do feed RSS do "Notícias ao Minuto". Assim como a página principal, a interface é clara e organizada, permitindo fácil acesso às informações salvas no sistema.

![última Notícias](/frontend/src/public/img/Print2.png)

A página de "Sobre" fornece informações sobre o projeto e a equipe responsável. 

![Sobre](/frontend/src/public/img/Print3.png)

### 🔍 Testando Localmente

Para testar o projeto localmente, siga estas etapas:

1. Abra o terminal (ou prompt de comando) e execute o seguinte comando para clonar o repositório:

   `git clone -b Grupo-6 https://github.com/Compass-pb-aws-2024-AGOSTO-A/sprints-2-3-pb-aws-agosto-a.git`

2. Após clonar o repositório, entre no diretório do projeto com o comando:

   `cd sprints-2-3-pb-aws-agosto-a`

3. Execute o comando abaixo para instalar todas as dependências necessárias para o projeto:

   `npm install`

4. Inicie o servidor local com o comando:

   `npm start`

5. Abra um navegador web e digite o seguinte endereço na barra de endereços:

   `http://localhost:3000`

Isso abrirá a interface web do projeto. Se o servidor estiver funcionando corretamente, você verá a página principal onde pode visualizar as notícias extraídas do feed RSS do "Notícias ao Minuto".

#### 📝 Observação
Se você encontrar algum problema ou a página não carregar, verifique as mensagens no terminal para possíveis erros e certifique-se de que o servidor está rodando corretamente. Caso precise de mais assistência, consulte a seção de [Autores] e entre em contato conosco.

### 🌐 Acesso ao Projeto em Produção

O projeto está em produção e pode ser acessado através do EC2 na AWS, que está rodando a aplicação em Docker. Basta clicar no link abaixo para acessar a aplicação hospedada:

**Link do EC2:** [Acesse o projeto em produção](http://ec2-your-public-dns.amazonaws.com)

## 🛠️ Estrutura do Projeto
Mantivemos uma estrutura organizada para facilitar a manutenção e a compreensão do código. O projeto foi dividido em duas partes principais: **Back-end** e **Front-end**, cada uma responsável por funcionalidades específicas:

#### ⚙️ Backend

- **src/**
  - **business/** - Contém as regras de negócio do projeto, que lida com a lógica de extração e processamento dos dados RSS.
  - **controllers/** - Manipula as requisições e respostas da API, responsável por coordenar a extração dos dados RSS e a interação com o AWS S3.
  - **repositories/** - Contém a lógica de interação com os serviços externos.
  - **routes/** - Define as rotas da API, como a extração de RSS e a consulta aos arquivos JSON no S3.
  - `app.js` - Configuração principal da aplicação Node.js com o Express.
  - `api-docs.yaml` - Documentação da API.

#### 🎨 Frontend

- **src/**
   - **public/**
      - **css/**
         - `style.css` - Estilo da interface.
      - **img/** - Imagens utilizadas na página.
      - **js/**
         - `app.js` - Lógica do front-end, incluindo a manipulação de eventos e integração com a API.
         - `latest-news.js` - Script para a página de "Últimas Notícias".
      - `index.html` - Página HTML principal que exibe os dados extraídos do RSS.
      - `about.html` - Página HTML "Sobre".
      - `contact.html` - Página HTML "Contato".
      - `latest-news.html` - Página HTML "Últimas Notícias".
  ---
## 🚀 Tecnologias Utilizadas

| Ferramenta       | Descrição                                         |
| ---------------- | ------------------------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)      | Usado para criar a API                            |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)   | Framework para criar o servidor da API            |
| ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)       | Conteinerização da aplicação                      |
| ![AWS S3](https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=amazonaws&logoColor=white)       | Armazenamento dos arquivos JSON                   |
| ![AWS EC2](https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)      | Hospedagem dos containers Docker                  |
| ![HTML, CSS, JS](https://img.shields.io/badge/HTML%20/%20CSS%20/%20JS-000000?style=for-the-badge&logo=html5&logoColor=white) | Criação da interface e visualização dos dados     |
| ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) | Editor de código utilizado no desenvolvimento     |
| ![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)       | Organização geral de tarefas           |
| ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)     | Ferramenta para testar e documentar APIs          |
| ![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)          | Sistema operacional utilizado na máquina virtual EC2  |
| ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)    | Sistema operacional utilizado durante o desenvolvimento  |
| ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)    | Plataforma utilizada para reuniões da equipe       |


## 📝 Autores

- 👩🏼‍💻[Bárbara Poffo](https://github.com/barbarapoffo)
- 👨🏻‍💻[Bruno Aureliano](https://github.com/BrunoAureliano)
- 👨🏻‍💻[João Castro](https://github.com/joaocastro95)
- 👨🏻‍💻[Lucas Gean](https://github.com/LucasTKP)