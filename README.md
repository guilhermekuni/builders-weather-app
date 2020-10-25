<h1 align="center">:umbrella: Weather App :sunny:</h1>

<div align="center">
  <p align="center">
    <img alt="Repository languages count" src="https://img.shields.io/github/languages/top/guilhermekuni/builders-weather-app?color=%#7BE0D9">
    <img alt="Repository top language" src="https://img.shields.io/github/languages/count/guilhermekuni/builders-weather-app?color=%#7BE0D9">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/guilhermekuni/builders-weather-app?color=%#7BE0D9">
    <img alt="Repository last commit" src="https://img.shields.io/github/last-commit/guilhermekuni/builders-weather-app?color=%#7BE0D9" />
  </p>
  <h3>Weather App</h3>
  <p align="center">
    <a href="#sobre-information_source">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#funcionalidades-bulb">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#tecnologias-computer">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#iniciando-rocket">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  </p>
</div>

## Sobre :information_source:

Esse projeto é uma interface Web que consome a API [OpenWeather](https://openweathermap.org/api), tendo como objetivo mostrar a previsão do tempo atual e dos próximos dias.

**Projeto publicado no netfly:** <a href="https://builders-weather-app.netlify.app/" target="_blank">https://builders-weather-app.netlify.app/</a>

## Funcionalidades :bulb:

- Recupera e exibe informações do tempo atual a partir da geolocalização do usuário.
- Recupera e exibe previsão do tempo dos próximos 5 dias a partir da geolocalização do usuário.
- Botão que atualiza informações do tempo atual.
- Layout responsivo.
- "Skeleton loading".

<img src="src/assets/preview.gif" alt="preview" />

## Tecnologias :computer:

- **ReactJS** - Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux** - Biblioteca JavaScript utilizada para controle de estado global.
- **Axios** - Biblioteca JavaScript utilizada para realizar e controlar requests HTTP.
- **Date fns** - Biblioteca JavaScript moderna para manipulação de data.
- **Styled Components** - Biblioteca que permite usar estilos em nível de componente, aplicando a técnica CSS-in-JS.
- **ESLint, Prettier, EditorConfig** - Bibliotecas utilizadas para linting e padronização de código.

## Iniciando :rocket:

### Execute os testes

1. Execute `yarn` para instalar as dependências do projeto.
2. Execute `yarn test` para rodar todos os testes implementados.

**Obs:** Os testes ainda não foram implementados :confused:

### Execute a aplicação

1. Execute `yarn` para instalar as dependências do projeto.
2. Execute `yarn start` para subir a aplicação.
3. O projeto será executado no link [http://localhost:3000](http://localhost:3000).

