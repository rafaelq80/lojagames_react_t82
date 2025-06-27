# Projeto Loja de Games - Frontend com React

<br />

<div align="center">     
     <img src="https://i.imgur.com/AzshGmS.png" title="source: imgur.com" width="50%"/>
</div> 

<br />

## 📚 Documentação - Menu Mobile

------

<br />

## Visão Geral
O menu mobile da Navbar foi projetado para garantir acessibilidade, responsividade e uma experiência de usuário fluida em dispositivos móveis. Ele utiliza React, Tailwind CSS e Phosphor Icons.

---

## Funcionamento
- O menu mobile é controlado pelo estado `menuState` (`'closed'` ou `'open'`), que reside no componente `App`.
- O botão hambúrguer (`ListIcon`) aparece apenas em telas menores que `md` e quando o menu está fechado.
- Ao clicar no hambúrguer, o menu mobile cobre toda a tela, exibindo o logo, o botão de fechar (`XIcon`), barra de busca e links de navegação.
- O botão X fecha o menu, retornando ao estado inicial.

---

## Props do Componente Navbar
```tsx
<Navbar
  menuState={menuState} // Estado do menu mobile ('closed' | 'open')
  onMenuToggle={toggleMenu} // Função para abrir/fechar menu mobile
  onMenuClose={closeMenu}   // Função para fechar menu mobile
/>
```

---

## Estrutura do Menu Mobile
- **Logo**: Alinhado à esquerda, na mesma linha do botão X, igual à Navbar fixa.
- **Botão X**: Alinhado à direita, fecha o menu mobile.
- **Barra de busca**: Campo de pesquisa responsivo.
- **Links**: Navegação para Home, Produtos, Cadastro de Produto, Categorias e Cadastro de Categoria.
- **Ícones**: Usuário e carrinho, alinhados na base do menu.

---

## Responsividade
- O menu mobile só aparece em telas menores que `md` (`md:hidden`).
- O botão hambúrguer e o menu mobile nunca aparecem juntos.
- O menu empurra o conteúdo para baixo e cobre toda a tela, incluindo a Navbar fixa.

---

## Acessibilidade
- Todos os botões possuem `aria-label` descritivo.
- O botão X é sempre acessível e visível no topo do menu mobile.
- Os links e botões são elementos nativos interativos.

---

## Animações
- O menu mobile utiliza animações suaves de fade-in e slide-in:
  - `fade-in`: Suaviza a opacidade ao aparecer.
  - `slide-in`: Desliza o menu de cima para baixo.
- As animações são aplicadas via classes utilitárias do Tailwind e keyframes CSS customizados.

---

## Boas Práticas Adotadas
- Separação de responsabilidades: estado no App, apresentação no Navbar.
- Uso de props tipadas para controle do menu.
- Classes Tailwind organizadas por ordem lógica.
- Comentários explicativos em PT-BR no código.
- Sem overlay fixo: o menu mobile faz parte do fluxo visual, empurrando o conteúdo.

---

## Exemplo de Estado e Funções no App
```tsx
const [menuState, setMenuState] = useState<'closed' | 'open'>('closed');

const toggleMenu = () => setMenuState(prev => prev === 'closed' ? 'open' : 'closed');
const closeMenu = () => setMenuState('closed');
```

---

## Observações
- O menu mobile cobre toda a tela, inclusive a Navbar, para dar foco ao menu.
- O logo permanece visível no topo do menu mobile, alinhado à esquerda.
- O design e a experiência seguem padrões modernos de usabilidade mobile.

---

## Observações sobre o Código

### useRef
- O hook `useRef` do React é utilizado para criar uma referência mutável a um elemento do DOM.
- No menu mobile, ele serve para acessar o container do menu caso seja necessário manipular foco, rolagem ou outras interações diretas com o DOM.
- Não causa re-renderização ao ser alterado.

### Type para Tipagem
- O `type` do TypeScript é utilizado para definir o tipo do estado do menu mobile (`'closed' | 'open'`).
- Permite maior clareza e segurança no controle de estados e props entre componentes.
- Facilita a manutenção e evita erros de digitação ou valores inválidos.

### Animações no index.css
- As animações `fade-in` e `slide-in` foram implementadas no arquivo `src/index.css`.
- São aplicadas ao menu mobile via classes utilitárias (`animate-fade-in`, `animate-slide-in`).
- Isso garante transições suaves sem alterar a estrutura ou o design do menu. 

<br /><br />

### ◀ [Voltar](../README.md)