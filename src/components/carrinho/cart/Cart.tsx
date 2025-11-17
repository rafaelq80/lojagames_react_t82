import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import CardCart from '../cardcart/CardCart'
import { ShoppingCartIcon } from '@phosphor-icons/react'

function Cart() {
	const { items, quantidadeItems, valorTotal, limparCart } =
		useContext(CartContext)

	return (
		<div className="min-h-screen bg-gray-100 py-8">
			<div className="container mx-auto px-4">
				{/* Cabeçalho */}
				<h1 className="text-3xl md:text-4xl text-center text-gray-800 mb-8">
					Carrinho de Compras
				</h1>

				{/* Carrinho Vazio */}
				{items.length === 0 && (
					<div className="bg-white rounded-lg shadow-sm p-12 text-center">
						<ShoppingCartIcon size={64} className="mx-auto text-gray-300 mb-4" />
						<h2 className="text-xl font-semibold text-gray-600 mb-2">
							Seu carrinho está vazio
						</h2>
						<p className="text-gray-500">
							Adicione produtos para começar suas compras!
						</p>
					</div>
				)}

				{/* Layout Principal: Lista de Produtos + Resumo */}
				{items.length > 0 && (
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{/* Coluna Esquerda: Lista de Produtos */}
						<div className="lg:col-span-2 space-y-4">
							{items.map((produto) => (
								<CardCart key={produto.id} item={produto} />
							))}
						</div>

						{/* Coluna Direita: Resumo da Compra */}
						<div className="lg:col-span-1">
							<div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
								<h2 className="text-xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
									Resumo da Compra
								</h2>

								<div className="space-y-3 mb-6">
									<div className="flex justify-between text-gray-600">
										<span>Produtos ({quantidadeItems})</span>
										<span className="font-semibold text-gray-800">
											{Intl.NumberFormat('pt-BR', {
												style: 'currency',
												currency: 'BRL',
											}).format(valorTotal)}
										</span>
									</div>

									<div className="flex justify-between text-gray-600">
										<span>Frete</span>
										<span className="font-semibold text-green-600">
											Grátis
										</span>
									</div>

									<div className="flex justify-between text-gray-600">
										<span>Desconto</span>
										<span className="font-semibold text-gray-800">
											{Intl.NumberFormat('pt-BR', {
												style: 'currency',
												currency: 'BRL',
											}).format(0.0)}
										</span>
									</div>
								</div>

								<div className="flex justify-between items-center text-lg font-bold py-4 mb-6 border-t border-gray-200">
									<span className="text-gray-800">Total</span>
									<span className="text-2xl text-blue-600">
										{Intl.NumberFormat('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										}).format(valorTotal)}
									</span>
								</div>

								{/* Formas de Pagamento */}
								<div className="mb-4 pb-4 border-b border-gray-200">
									<p className="text-sm text-gray-600 mb-3">Formas de pagamento:</p>
									<div className="flex flex-wrap gap-2 justify-center">
										<div className="flex flex-row bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img 
												src='https://ik.imagekit.io/vzr6ryejm/ecommerce/credit-card.png'
												alt='Logo Cartão de Crédito'
												className='w-10'
											></img>
										</div>
										<div className="flex flex-row items-center gap-1 bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img 
												src='https://ik.imagekit.io/vzr6ryejm/ecommerce/pix-svgrepo-com.svg'
												alt='Logo do PIX'
												className='w-4'
											></img>
											<span>PIX</span>
										</div>
										<div className="flex flex-row bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img 
												src='https://ik.imagekit.io/vzr6ryejm/ecommerce/google-pay-svgrepo-com.svg'
												alt='Logo do Google Pay'
												className='w-8'
											></img>
										</div>
										<div className="flex flex-row bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img 
												src='https://ik.imagekit.io/vzr6ryejm/ecommerce/apple-pay-svgrepo-com.svg'
												alt='Logo do Apple Pay'
												className='w-8'
											></img>
										</div>
										<div className="bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img 
												src='https://ik.imagekit.io/vzr6ryejm/ecommerce/boleto-logo.svg'
												alt='Logo do Boleto Bancáriao'
												className='w-10'
											></img>
										</div>
									</div>
								</div>

								<button
									className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
									type="button"
									onClick={limparCart}
								>
									Finalizar Compra
								</button>

								<p className="text-xs text-gray-500 text-center mt-4">
									Frete grátis para todo o Brasil
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart