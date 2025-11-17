import { MinusIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react"
import { useContext } from "react"
import { CartContext, Items } from "../../../contexts/CartContext"

interface CardProdutosProps {
    item: Items
}

function CardCart({ item }: CardProdutosProps) {

    const { adicionarItem, removerItem } = useContext(CartContext)

    return (
        <div className='flex gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-200'>
            {/* Imagem do Produto */}
            <div className='w-32 h-32 shrink-0 bg-gray-50 rounded-lg p-2 flex items-center justify-center'>
                <img 
                    src={item.foto} 
                    className='max-h-full max-w-full object-contain' 
                    alt={item.nome} 
                />
            </div>

            {/* Informações do Produto */}
            <div className='grow flex flex-col justify-between'>
                <div>
                    <h3 className='font-semibold text-gray-800 mb-1'>
                        {item.nome}
                    </h3>
                    <p className='text-sm text-gray-500 mb-2'>
                        Categoria: {item.categoria?.tipo}
                    </p>
                    <p className='text-xl font-bold text-blue-600'>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.preco)}
                    </p>
                </div>

                {/* Controles de Quantidade */}
                <div className='flex items-center gap-4 mt-3'>
                    <div className='flex items-center gap-2 border border-gray-300 rounded-lg'>
                        <button 
                            className='p-2 hover:bg-gray-100 rounded-l-lg transition-colors'
                            onClick={() => removerItem(item.id)}
                        >
                            <MinusIcon size={20} className="text-gray-600" />
                        </button>
                        
                        <span className='px-4 font-semibold text-gray-800 min-w-10 text-center'>
                            {item.quantidade}
                        </span>
                        
                        <button 
                            className='p-2 hover:bg-gray-100 rounded-r-lg transition-colors'
                            onClick={() => adicionarItem(item.id)}
                        >
                            <PlusIcon size={20} className="text-gray-600" />
                        </button>
                    </div>

                    <button 
                        className='p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors'
                        onClick={() => removerItem(item.id)}
                        title="Remover produto"
                    >
                        <TrashIcon size={20} />
                    </button>
                </div>
            </div>

            {/* Subtotal */}
            <div className='flex flex-col items-end justify-between'>
                <p className='text-lg font-bold text-gray-800'>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(item.preco * item.quantidade)}
                </p>
            </div>
        </div>
    )
}

export default CardCart