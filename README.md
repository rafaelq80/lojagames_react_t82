# Projeto Loja de Games - Frontend com React

<br />

<div align="center">     
     <img src="https://i.imgur.com/AzshGmS.png" title="source: imgur.com" width="50%"/>
</div> 
<br /> 

<div align="center">   
    <img src="https://img.shields.io/github/languages/top/rafaelq80/lojagames_react_t82?style=flat-square" />
    <img src="https://img.shields.io/github/repo-size/rafaelq80/lojagames_react_t82?style=flat-square" />   
     <img src="https://img.shields.io/github/languages/count/rafaelq80/lojagames_react_t82?style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/rafaelq80/lojagames_react_t82?style=flat-square" />
    <img src="https://img.shields.io/github/issues/rafaelq80/lojagames_react_t82?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/rafaelq80/lojagames_react_t82?style=flat-square" />
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" /> 
</div>


<br />

## 1. Descrição

A **Loja de Games - Frontend** é uma aplicação web desenvolvida com **React** e **TypeScript**, com o objetivo de consumir e exibir dados de uma API REST construída com **Spring Boot**. A aplicação permite a visualização, criação, edição e exclusão de produtos da loja, classificadas por categorias.

Funcionalidades:

1. Listagem e gerenciamento de produtos
2. Criação, edição e exclusão de categorias
3. Associação entre produtos e categorias
4. Busca de produtos
5. Navegação entre páginas com React Router Dom
6. Consumo de API com Axios
7. Estilização com Tailwind CSS
8. Página inicial com grid responsivo e Menu Mobile (hambúrguer)
9. Rodapé fixo e adaptável
10. Componentes reutilizáveis e organizados

<br />

## 2. Documentação

### 📱 Menu Mobile

- Veja detalhes de funcionamento, acessibilidade, animações e decisões de UX em [`docs/MENU_MOBILE.md`](./docs/MENU_MOBILE.md).

<br />

## 3. Tecnologias Utilizadas

| Tecnologia           | Finalidade                            | Link                                                     |
| -------------------- | ------------------------------------- | -------------------------------------------------------- |
| **React**            | Biblioteca JavaScript para interfaces | [React](https://react.dev/)                              |
| **TypeScript**       | Superset do JavaScript com tipagem    | [TypeScript](https://www.typescriptlang.org/)            |
| **Tailwind CSS**     | Estilização com classes utilitárias   | [Tailwind CSS](https://tailwindcss.com/)                 |
| **Axios**            | Consumo de APIs REST                  | [Axios](https://axios-http.com/ptbr/)                    |
| **React Router DOM** | Roteamento SPA                        | [React Router](https://reactrouter.com/)                 |
| **Vite**             | Build tool rápido para projetos React | [Vite](https://vite.dev/)                                |
| **Phosphor Icons**   | Ícones                                | [Phosphor Icons](https://phosphoricons.com/)             |
| **React Spinners**   | Animações de carregamento (loaders)   | [React Spinners](https://www.davidhu.io/react-spinners/) |

<br />

## 4. Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) ou outro editor
- Backend - Spring ([Repositório da API](https://github.com/rafaelq80/lojagames_spring_t82))

<br />

## 5. Como executar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/rafaelq80/blogpessoal_react_t82.git
```

2. **Acesse a pasta do projeto:**

```bash
cd lojagames_react_t82
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto em modo desenvolvimento:**

```bash
npm run dev
```

5. **Acesse a aplicação em:**

```
http://localhost:5173
```

<br />


## 6. Integração com a API Backend

A aplicação se comunica com a API do projeto:

🔗 [Loja de Games - Backend Spring Boot](https://github.com/rafaelq80/lojagames_spring_t82)

> A URL base da API deve ser configurada (ex: `http://localhost:8080`) em um arquivo de configuração, como `.env`, ou diretamente nos serviços do Axios.

<br />


## 7. Estrutura de Diretórios

```
src/
│
├── assets/           → Imagens e ícones
├── components/       → Componentes reutilizáveis
├── models/           → Interfaces e tipos do projeto
├── pages/            → Páginas da aplicação
├── services/         → Configuração do Axios
├── utils/            → Funções auxiliares (alerts)
├── App.css           → Estilos do Componente raiz
├── App.tsx           → Componente raiz
├── main.tsx          → Entrada da aplicação
└── index.css         → Estilos globais com Tailwind
```

<br />


## 8. Implementações futuras

- [ ] Carrossel na página home
- [ ] Busca pelo nome do produto
- [ ] Simulador de Carrinho de Compras

<br />


## 9. Contribuição

Contribuições são bem-vindas!

Se você encontrou algum problema ou deseja propor melhorias:

- Abra uma **issue**
- Envie um **pull request**
- Compartilhe com colegas aprendizes!

<br />


## 10. Contato

Desenvolvido por [**Rafael**](https://github.com/rafaelq80)
Dúvidas ou sugestões? Entre em contato pelo GitHub ou abra uma issue no repositório.

