import { ListIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

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

/** 
 * Tipagem das props recebidas pelo componente Navbar
 * - menuState: estado do menu mobile
 * - onMenuToggle: função para abrir/fechar menu mobile
 * - onMenuClose: função para fechar menu mobile
 * Todas as funções são passadas pelo componente pai (App)
*/
interface NavbarProps {
  menuState: MenuState;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {
    /**
     * Referência para o menu mobile (pode ser usada para acessibilidade ou foco)
     * 
     * O useRef é um hook do React que permite criar uma referência mutável 
     * que persiste durante o ciclo de vida do componente. 
     * Ele é comumente utilizado para acessar diretamente elementos do DOM ou 
     * para armazenar valores que não precisam causar re-renderização quando 
     * modificados, que é o caso do menu mobile.
     *  
    */ 
    const menuRef = useRef<HTMLDivElement>(null);
    
    /** 
     * Função Handler (função responsável por responder a eventos disparados 
     * pela interface do usuário, como cliques, digitação, envio de formulários,
     *  entre outros.), para alternar o menu mobile entre abrir e fechar.
     */ 
    const handleMenuToggle = (): void => {
        onMenuToggle();
    };
    
    // Handler para fechar o menu mobile, ao clicar no botão X
    const handleMenuClose = (): void => {
        onMenuClose();
    };

    return (
        <>
            {/* Navbar - fixa apenas no mobile */}
            <div className='fixed md:relative top-0 left-0 z-50 w-full bg-slate-800 text-white flex justify-center py-4 md:py-2'>
                <div className="container mx-6 mt-2 md:mt-0 flex items-center justify-between text-lg">
                    {/* Logo da loja, sempre visível, redireciona para Home */}
                    <Link to='/home'>
                        <img
                            src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1705976699033"
                            alt="Logo"
                            className='w-50 md:w-60'
                        />
                    </Link>

                    {/* Barra de busca (aparece apenas no desktop/tablet) */}
                    <div className="relative flex w-2/5 items-center justify-center text-black max-md:hidden">
                        <form className="flex w-full items-center justify-center">
                            <input className="h-9 w-10/12 rounded-lg bg-white px-4 py-4 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button type="submit" className="ms-2 h-9 w-9 rounded-lg border border-teal-700 bg-teal-500 p-2.5 text-sm font-medium text-white hover:bg-teal-900">
                                <MagnifyingGlassIcon size={14} weight="bold"/>
                            </button>
                        </form>
                    </div>

                    {/* Menu de navegação desktop/tablet */}
                    <div className='hidden md:flex items-center gap-4 py-4'>
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <UserIcon size={32} weight='bold' />
                        <ShoppingCartIcon size={32} weight='bold' />
                    </div>

                    {/* Botão menu mobile (hambúrguer), só aparece em telas pequenas e quando o menu está fechado */}
                    {menuState === 'closed' && (
                      <button className="p-2 md:hidden cursor-pointer" onClick={handleMenuToggle} aria-label="Abrir menu">
                        <ListIcon size={32} weight="bold" />
                      </button>
                    )}
                </div>
            </div>

            {/* Menu mobile (aparece sobrepondo o conteúdo quando aberto) */}
            {menuState === 'open' && (
                <div 
                    ref={menuRef}
                    className="fixed top-0 left-0 z-50 h-full w-full bg-slate-800 bg-opacity-95 md:hidden transition-all duration-300 ease-in-out animate-fade-in animate-slide-in"
                    style={{ animation: 'fade-in 0.3s, slide-in 0.3s' }}
                >
                    <div className="relative flex flex-col items-start justify-start gap-2 p-6 text-left text-lg text-white">
                        {/* Linha com logo à esquerda e botão X à direita */}
                        <div className="flex w-full items-center justify-between mb-2">
                          <img
                              src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1705976699033"
                              alt="Logo"
                              className='w-50 md:w-60'
                          />
                          <button
                              type="button"
                              aria-label="Fechar menu"
                              className="text-white hover:text-gray-300 mr-2 cursor-pointer"
                              onClick={handleMenuClose}
                          >
                              <XIcon size={32} weight="bold" />
                          </button>
                        </div>
                        
                        {/* Barra de busca mobile */}
                        <form className="mb-4 flex w-full items-center">
                            <input className="h-9 w-10/12 rounded-lg bg-white px-4 py-4 text-black focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca-mobile"
                                name="busca-mobile"
                                required
                            />
                            <button type="submit" className="ms-2 h-9 w-9 rounded-lg border border-teal-700 bg-teal-500 p-2.5 text-sm font-medium text-white hover:bg-teal-900">
                                <MagnifyingGlassIcon size={14} weight="bold" className="text-white"/>
                            </button>
                        </form>
                        
                        {/* Links de navegação mobile */}
                        <Link to='/home' onClick={handleMenuClose} className="py-2 text-white hover:text-gray-300">
                            Home
                        </Link>
                        <Link to='produtos' onClick={handleMenuClose} className="py-2 text-white hover:text-gray-300">
                            Produtos
                        </Link>
                        <Link to='/cadproduto' onClick={handleMenuClose} className="py-2 text-white hover:text-gray-300">
                            Cadastrar Produto
                        </Link>
                        <Link to='/categorias' onClick={handleMenuClose} className="py-2 text-white hover:text-gray-300">
                            Categorias
                        </Link>
                        <Link to='/cadcategoria' onClick={handleMenuClose} className="py-2 text-white hover:text-gray-300">
                            Cadastrar Categoria
                        </Link>
                        
                        {/* Ícones de usuário e carrinho no menu mobile */}
                        <div className='mt-4 flex gap-4'>
                        <Link to='' onClick={handleMenuClose} >
                            <UserIcon size={32} weight='bold' className="text-white" />
                        </Link>
                        <Link to='' onClick={handleMenuClose} >
                            <ShoppingCartIcon size={32} weight='bold' className="text-white" />                        
                        </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar