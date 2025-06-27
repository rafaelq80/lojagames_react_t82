import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { useState } from 'react';

/** 
 * Tipo (type) para controlar o estado do Menu Mobile (aberto ou fechado)
 * 
 * Type é uma forma mais flexível de declarar tipos no TypeScript. 
 * Ele permite criar aliases para objetos, tipos primitivos, unions (|) e 
 * intersections (&). 
 * type é recomendado quando há necessidade de compor tipos complexos, 
 * reutilizar estruturas ou trabalhar com variações de tipo. 
 * Ao contrário da interface, o type não pode ser declarado mais de uma vez
 * no seu código.
*/
type MenuState = 'closed' | 'open';

function App() {
  // Estado para controlar se o Menu Mobile está aberto ou fechado
  const [menuState, setMenuState] = useState<MenuState>('closed');

  // Função para alternar o estado do Menu Mobile (abrir/fechar)
  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed');
  };

  // Função para fechar o Menu Mobile (usada em eventos de navegação ou clique fora)
  const closeMenu = (): void => {
    setMenuState('closed');
  };

  // Função para verificar se o Footer deve ser exibido (só aparece quando o Menu Mobile está fechado)
  const shouldShowFooter = (): boolean => menuState === 'closed';

  // Estrutura principal do App, com Router, Navbar, conteúdo e Footer
  return (
    // BrowserRouter permite navegação entre páginas sem recarregar o site
      <BrowserRouter>
        {/* Navbar fixa no topo, recebe estado e funções de controle do menu */}
        <Navbar 
          menuState={menuState} // Menu Mobile aberto ou fechado?
          onMenuToggle={toggleMenu} // Função para abrir e fechar o Menu Mobile
          onMenuClose={closeMenu} // Função fechar o Menu Mobile (botão X)
        />
        {/* Conteúdo principal da página, com padding-top para não ficar atrás da Navbar e 
            padding-bottom para não ficar atrás do Footer */}
        <div className={`min-h-[90vh] pt-16 bg-slate-100 ${shouldShowFooter() ? 'pb-20' : ''}`}>
          <Routes>
            {/* Definição das rotas do app, cada caminho renderiza um componente */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        {/* Footer fixo na base da tela, só aparece quando o Menu Mobile está fechado */}
        <div className={shouldShowFooter() ? 'fixed bottom-0 left-0 z-50 w-full' : 'hidden'}>
          <Footer />
        </div>
      </BrowserRouter>
    
  );
}

export default App