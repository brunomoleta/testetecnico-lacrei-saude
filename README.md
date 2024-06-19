# Teste técnico da plataforma Lacrei Saúde

<hr style="border-top: 3px solid #bbb;">

## Descrição

Este é o teste técnico para voluntariado na plataforma Lacrei Saúde que conecta pessoas LGBTQIAPN+
com profissionais da saúde qualificados.

<hr style="border-top: 3px solid #bbb;">

## Índice

- [Visão geral](#visão-geral)
  - [Requisitos pedidos](#requisitos-pedidos)
  - [Tecnologias usadas](#tecnologias-usadas)
    - [Principais](#principais)
    - [Complementares](#complementares)
  - [Funcionalidades](#funcionalidades)
  - [Deploy](#deploy)
- [Estrutura do projeto](#estrutura-do-projeto)
  - [Scripts](#scripts)
  - [Dependências](#dependências)
  - [Dependências de desenvolvimento](#dependências-de-desenvolvimento)
  - [Arquitetura](#arquitetura)
- [Configuração e execução local](#Configuração-e-execução-local)
  - [Instalação](#instalação)
  - [Executar o projeto](#executar-o-projeto)
  - [Arquitetura](#arquitetura)
- [Processo de trabalho](#processo-de-trabalho)
  - [Aprendizado](#aprendizado)
  - [O que desenvolver em seguida](#o-que-desenvolver-em-seguida)
  - [Fontes úteis](#fontes-úteis)
- [Créditos](#crédito)
  - [Autores](#autores)
  - [Pessoas que nos ajudaram](#pessoas-que-nos-ajudaram)

<hr style="border-top: 3px solid #bbb;">
<hr style="border-top: 3px solid #bbb;">

## Visão geral

### Requisitos pedidos

Foram disponibilizado cinco dias úteis (13-20/06/2024) para:

- Desenvolver duas páginas web interativas com roteamento entre elas, incorporando os seguintes elementos:
  - **Header e Footer**: Designs que reflitam a essência acolhedora da Lacrei Saúde.
  - **Três Botões**: Cada um com uma funcionalidade única, adicionando interatividade ao seu site e fazendo link com
    páginas da Lacrei Saúde.
  - **Respeito ao Style Guide** do Figma enviado por email;
  - **Realizar um teste** de sua escolha e demonstrar a responsividade;

<hr style="border-top: 3px solid #bbb;">

### Tecnologias usadas

#### Principais

- React
- Next.js
- Styled-components
- Typescript

#### Complementares

- Framer motion
- Vitest
- React Testing Library

<hr style="border-top: 3px solid #bbb;">

### Funcionalidades

- Página Inicial
  - a pessoa usuária pode visualizar
    ilustrações artísticas feitas somente em HTML e CSS;
  - Ela pode navegar de um projeto para o outro usando botões;
  - Pode colocar este projeto em visualização em tela cheia;
- Segunda página
  - A bandeira do Orgulho pode ser personalizada de acordo com o que a pessoa
    preferir;
  - É possível personalizar a velocidade do "vento" que passa pela bandeira;

### Deploy

- https://durval-music-shop.vercel.app/

<hr style="border-top: 3px solid #bbb;">
<hr style="border-top: 3px solid #bbb;">

## Estrutura do projeto

### Scripts

- `dev`: Inicia o ambiente de desenvolvimento.
- `build`: Usado para construir o aplicativo para produção.
- `format`: Formata o projeto inteiro usando Prettier.
- `test:unit`: Realiza os testes unitários na aplicação.
- `test:cy-d`: Realiza testes de interface no terminal.
- `test:cy-open`: Abre o Cypress e é possível ver o teste sendo realizado automaticamente.
- `lint`: Executa o ESLint para linting e correção automática.
- `preview`: Usado para pré-visualizar o aplicativo construído usando o Vite.

Execute os scripts utilizando `npm run`, `yarn` ou `pnpm`.

Exemplo: `npm run dev`.

<hr style="border-top: 3px solid #bbb;">

### Dependências

- `next`: 14.2.4,
- `react`: ^18,
- `react-dom`: ^1
- `styled-components`: ^6.1.11

### Dependências de Desenvolvimento

- `@testing-library/react`: ^16.0.0,
- `@types/node`: ^20,
- `@types/react`: ^18.3.3,
- `@types/react-dom`: ^18.3.0,
- `eslint`: ^8,
- `eslint-config-next`: 14.2.4,
- `jsdom`: ^24.1.0,
- `new-component`: ^5.0.2,
- `prettier`: ^3.3.2,
- `typescript`: ^5,
- `vitest`: ^1.6.0

<hr style="border-top: 3px solid #bbb;">
### Configuração e execução local

1. Clone o repositório:
   ```bash
    git clone git@github.com:brunomoleta/testetecnico-lacrei-saude.git
   ```
1. Instale as dependências:

   ```bash
     npm install
     # ou
     yarn install
     # ou
     pnpm install
   ```

1. Execute o Projeto  
 `bash
    # development
    yarn dev
    # ou
    pnpm dev
    # ou
    npm run dev
    `
<hr style="border-top: 3px solid #bbb;">

### Arquitetura

```
lacrei/
│
├── node_modules/         Pacotes e dependências do projeto.
│
├── public/               Recursos públicos acessíveis diretamente.
│
├── src/                    Código-fonte da aplicação.
│   ├── assets/             Recursos estáticos como imagens, icones, etc.
│   ├── components/         Componentes reutilizáveis.
│   ├── hooks/              Hooks reutilizáveis.
│   ├── providers/          Componentes de gerenciamento de estado global.
│   ├── schemas/            Contexto de validação de dados.
│   ├── services/           Funções que auxiliam as funções principais.
│   ├── styled-components/  Estilos globais da aplicação.
│   └── tests/              Testes
│   └── types/              Tipagem dos components, funções e providers.
```

<hr style="border-top: 3px solid #bbb;">

### Processo de trabalho

- Na terça-feira de tarde iniciei decidindo fazer as funcionalidades
- em três partes. Primeiro, setar um botão que muda as cores do site globalmente
- na Header.

- Após decidir colocar algo que tenha a ver com a
- marca, tanto no sentido da saúde quanto a causa LGBTQIAPN+
- decidi fazer um parágrafo falando da importância
- da apreciação da arte para a saúde e em seguida
- colocar artes feitas em CSS+HTML por pessoas
- desenvolvedoras.
- Acredito que isso une tudo que envolve a marca LacreiSaúde.
- E um botão para trocar de página

- E no footer decidi colocar além da logo, um botão "quero me cadastrar"
- que abre um modal onde a pessoa usuária escolhe se é paciente ou profissional.

- Tem sido um pouco confuso usar o figma porque é Muuuuita informação.
- As vezes ela até confunde um pouco. Mas é legal ver que o design está
- bem consistente.
