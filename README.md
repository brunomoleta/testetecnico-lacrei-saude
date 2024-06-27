# Teste técnico de Frontend da Lacrei Saúde

<hr style="border-top: 3px solid #bbb;">

## Descrição

Este é o teste técnico para voluntariado na Lacrei Saúde, a aplicação que conecta pessoas LGBTQIAPN+
com profissionais da saúde qualificados.

<hr style="border-top: 3px solid #bbb;">

## Índice

- [Visão geral](#visão-geral)
  - [Requisitos pedidos](#requisitos-pedidos)
  - [Tecnologias usadas](#tecnologias-usadas)
    - [Principais](#principais)
  - [Funcionalidades](#funcionalidades)
  - [Telas](#telas)
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
- [Considerações Finais](#considerações-finais)
  - [Agradecimentos](#agradecimentos)

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

<hr style="border-top: 3px solid #bbb;">

### Funcionalidades

- Página Inicial
  - Temos aqui uma seção similar ao site oficial da Lacrei Saúde.
  - Na Header os botões "Ajuda" e "Quem somos" levam o usuário a página oficial;
  - O botão Entrar leva a uma página da aplicação deste repositório;

  - No mais os botões "para Pacientes" e "para profissionais" levam a um formulário de cadastro;
  - O Footer possui os ícones que levam as redes sociais da marca;
  - Os demais links levam a pessoa usuária a página inicial;
  
- Selecionar pessoa
  - Possui a mesma descrição da mesma página da Lacrei e tem dois botões que direcionam para os formulários;

- Páginas de formulários
  - A pessoa pode preencher este formulário e ao apertar "enviar" o formulário é limpo.  

<hr style="border-top: 3px solid #bbb;">

### Telas

- Tela inicial

![Imagem da Página inicial](/public/MultiDeviceafphoto.jpg)

- Selecionar Pessoa

![Imagem da segunda página](/public/MultiDeviceafphoto-2.jpg)

<hr style="border-top: 3px solid #bbb;">

### Deploy

- https://testetecnico-lacrei-saude.vercel.app/

<hr style="border-top: 3px solid #bbb;">

## Estrutura do projeto

### Scripts

- `dev`: Inicia o ambiente de desenvolvimento.
- `build`: Usado para construir o aplicativo para produção.
- `format`: Formata o projeto inteiro usando Prettier.
- `lint`: Executa o ESLint para linting e correção automática.
- `preview`: Usado para pré-visualizar o aplicativo construído usando o Vite.
- `test`: Inicializar testes unitários com Vitest.

Execute os scripts utilizando `npm run`, `yarn` ou `pnpm`.

Exemplo: `npm run dev`.

<hr style="border-top: 3px solid #bbb;">

### Dependências

- `next`: 14.2.4,
- `react`: ^18,
- `react-dom`: ^18
- `styled-components`: ^6.1.11
- `@fontsource-variable/nunito`: ^5.0.19,
- `@radix-ui/react-visually-hidden`: ^1.0.3,
- `react-wrap-balancer`: ^1.1.1,


### Dependências de Desenvolvimento

- `@testing-library/dom`: ^10.1.0,
- `@testing-library/jest-dom`: ^6.4.6,
- `@testing-library/react`: ^16.0.0,
- `@testing-library/user-event`: ^14.5.2,
- `@types/node`: ^20,
- `@types/react`: ^18.3.3,
- `@types/react-dom`: ^18.3.0,
- `@vitejs/plugin-react`: ^4.3.1,
- `eslint`: ^8,
- `eslint-config-next`: 14.2.4,
- `jsdom`: ^24.1.0,
- `new-component`: ^5.0.2,
- `prettier`: ^3.3.2,
- `typescript`: ^5,
- `vitest`: ^1.6."

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
│   ├── __tests/            testes unitários usando Vitest
│   ├── app/                App do Next onde ocorre o coração do projeto, roteador etc
│   ├── assets/             Recursos estáticos como imagens, icones, etc.
│   ├── components/         Componentes reutilizáveis.
│   ├── data/               Código trazido pronto de fora do projeto.
│   ├── providers/          Componente que configura o Styled-components
│   ├── styled-components/  Estilos globais da aplicação.
│   └── types/              Tipagem dos components, funções e providers.
│   ├── utils/              Funções que auxiliam o lógica principal.
```

<hr style="border-top: 3px solid #bbb;">

## Processo de trabalho

- Desenvolvimento da Landing Page
- Seguido pela página Entrar
- Realização do botão para voltar ao topo da página
- Ajustes mais finos de Responsividade



### Aprendizado

Fui bastante cuidadoso nos alinhamentos dos elementos do Footer.
Isso exigiu usar as props do Styled Components pela primeira vez.


### O que desenvolver em seguida

- Associar o login e cadastro das páginas ao back end

### Fontes úteis

O Blog do desenvolvedor canadense Josh Comeau é excelente. 
Tem muita coisa gratuita de qualidade pra aprender lá relacionado
a front end.

<hr style="border-top: 3px solid #bbb;">

## Considerações finais

#### Agradecimentos

- Agradeço a Lacrei Saúde pela oportunidade 
  de realizar o teste técnico e reitero meu interesse em fazer parte da ONG através
  do voluntariado tanto pelo interesse na causa quanto 
  para trabalhar como Front end em um projeto real :D 
