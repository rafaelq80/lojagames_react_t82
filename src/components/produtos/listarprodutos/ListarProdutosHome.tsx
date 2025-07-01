import { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners'
import Produto from '../../../models/Produto'
import { listar } from '../../../services/Service'
import CardProdutos from '../cardprodutos/CardProdutos'

function ListarProdutosHome() {
	const [produtos, setProdutos] = useState<Produto[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarProdutos() {
		setIsLoading(true)

		try {
			await listar('/produtos', setProdutos)
		} catch {
			console.log('Erro ao listar todos os Produtos!')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		buscarProdutos()
	}, [produtos.length])

	return (
		<>
			{isLoading && (
				<PacmanLoader
					color="#0D9488"
					margin={0}
					size={80}
					speedMultiplier={2}
					aria-label="Pacman-loading"
					className="mx-auto my-8"
				/>
			)}
			<div className="flex justify-center w-full">
				<div className="container flex flex-col mx-4">
					{!isLoading && produtos.length === 0 && (
						<span className="my-8 text-3xl text-center">
							Nenhum produto foi encontrado
						</span>
					)}

					<div className="grid grid-cols-2 gap-x-2 gap-y-2 my-2 md:my-0 sm:gap-x-6 sm:gap-y-2 lg:gap-x-4 lg:gap-y-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 pb-4">
						{produtos.map((produto) => (
							<CardProdutos
								key={produto.id}
								produto={produto}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarProdutosHome
