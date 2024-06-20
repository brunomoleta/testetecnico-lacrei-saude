# Teste técnico da plataforma Lacrei Saúde

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
  - [Créditos](#autores)
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
  - a pessoa usuária pode visualizar
    ilustrações artísticas feitas somente em HTML e CSS;
  - Ela pode navegar de um projeto para o outro usando botões;
  - Pode colocar este projeto em visualização em tela cheia;
- Segunda página
  - A bandeira do Orgulho pode ser personalizada de acordo com o que a pessoa
    preferir;
  - É possível personalizar a velocidade do "vento" que passa pela bandeira;

<hr style="border-top: 3px solid #bbb;">

### Telas 

![Imagem da Página inicial](/public/MultiDeviceafphoto.jpg)
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

Execute os scripts utilizando `npm run`, `yarn` ou `pnpm`.

Exemplo: `npm run dev`.

<hr style="border-top: 3px solid #bbb;">

### Dependências

- `next`: 14.2.4,
- `react`: ^18,
- `react-dom`: ^1
- `styled-components`: ^6.1.11
- `@fontsource-variable/nunito`: ^5.0.19,
- `@radix-ui/react-dialog`: ^1.1.0,
- `@radix-ui/react-icons`: ^1.3.0,
- `@radix-ui/react-visually-hidden`: ^1.0.3,
- `cookies-next`: ^4.2.1,
- `lodash.range`: ^3.2.0,
- `react-slick`: ^0.30.2,
- `react-wrap-balancer`: ^1.1.1,
- `slick-carousel`: ^1.8.1,

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

#### Terça-feira

- Iniciei decidindo fazer as funcionalidades
em três partes. 
- Primeiro, setar um botão que muda as cores do site globalmente
na Header.

- Após decidir colocar algo que tenha a ver com a
 marca, tanto no sentido da saúde quanto a causa LGBTQIAPN+
 decidi fazer um parágrafo falando de uma artista da comunidade que faz ilustrações
  em CSS e HTML. Acredito que isso tem muito a ver com tecnologia e de dar luz a pessoas desconhecidas.
- E um botão para trocar de página indo para uma funcionalidade que troca 
a bandeira do Orgulho entre quatro opções. A bandeira em si foi trazida pronta
do site do Josh Comeau. Meu trabalho foi trocar ela com um estado a partir do click nela mesma.
- E no footer decidi colocar além da logo, um link que leva ao "quem somos" do site oficial.

- Tem sido um pouco confuso usar o figma porque é Muuuuita informação.
O arquivo confunde um pouco. Mas é legal ver que o design da Lacrei
está bem consistente.

#### Quarta-feira

Escolhi as ilustrações para colocar na página inicial.
Tive bastante dificuldade em como colocá-las aqui no projeto.
Primeiro pensei em fazer um iframe direto no site css-art.
Mas não deu boa.
Então tive que "transplantar" a arte do Github de Sarah Fossheim
pra componentes React.

Fiquei na dúvida como seria a visualização. Então após alguns testes
decidi colocar em um carrossel usando uma API chamada `react-slick`.
Isso no Desktop. Pro Mobile este carrossel foi ocultado e criado uma 
rolagem vertical convencional.

Além disso, fiz o modo noturno com botões `dia` e `noite`.
Usei a maneira de fazer do [Josh Comeau](https://www.joshwcomeau.com/), um dev. muito bom
que tem um blog ótimo.

Já defini o que colocar na segunda página, que é uma arte da bandeira do orgulho LGBTQIAPN+
feita direto em código que o Josh mesmo explica [aqui](https://www.joshwcomeau.com/animation/pride-flags/).

Infelizmente como as ilustrações em CSS são feitas em px pela Sarah
acabei não fazendo Mobile first, mas é algo que realizei com frequência em outros projetos [portfólio](https://www.brunomoleta.com.br/).
Mas está adaptado pára Mobile também.

Amanhã quero ajeitar os estilos de fonte, fazer testes unitários e responsividade mobile :D.

#### Quinta-feira

Após ajeitar bem a página inicial com responsividade. Fui fazer os testes unitários.
Já os fiz, mas não em Next.js, apenas em React puro. Tive bastante dificuldade
com erros de configuração como a questão do @ (alias). Por isso preferi fazer
um teste ponta a ponta com Cypres em outro repositório e direto na aplicação em produção.

### Aprendizado

### O que desenvolver em seguida

O ideal seriam as transições de página, estado dos elementos em hover, active,
focus estarem mais bem apresentados. Usar Framer Motion para a renderização inicial
dos elementos também é uma boa.

### Fontes úteis

Blog do Josh Comeau é bom demais. Ele é engraçado e 
tem muita muita coisa gratuita pra aprender relacionada 
a front end.

<hr style="border-top: 3px solid #bbb;">  

## Considerações finais

### Créditos

- Josh Comeau e Sarah Fossheim que foram minhas inspirações
ao fazer este projeto.

### Agradecimentos

- Agradeço a Lacrei Saúde pela oportunidade de ler atentamente
a Marsha Design System e reitero meu interesse em fazer parte através 
do voluntariado. Tanto pela causa quanto pelo "pôr a mão na massa" :D.