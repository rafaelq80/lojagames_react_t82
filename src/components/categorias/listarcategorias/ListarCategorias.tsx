import { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import { listar } from '../../../services/Service'
import CardCategorias from '../cardcategorias/CardCategorias'
import { PacmanLoader } from 'react-spinners'

function ListarCategorias() {
	const [isLoading, setIsLoading] = useState(true)

	const [categorias, setCategorias] = useState<Categoria[]>([])

	async function buscarCategorias() {
		await listar('/categorias', setCategorias)
	}

	useEffect(() => {
		setIsLoading(true)
		buscarCategorias().finally(() => setIsLoading(false))
	}, [])

	return (
		<>
			{isLoading && (
				<PacmanLoader
					color="#0D9488"
					margin={0}
					size={80}
					speedMultiplier={2}
					aria-label="Pacman-loading"
					className="mx-auto my-28"
				/>
			)}
			<div className="flex justify-center bg-slate-100 py-8">
				<div className="container flex flex-col mx-4">
					{(!isLoading && categorias.length === 0) && (
						<div className="text-3xl text-center my-8">
							Nenhum produto foi encontrado
						</div>
					)}

					<div className="grid grid-cols-1 gap-x-2 gap-y-4 my-22 md:my-0 sm:gap-x-6 sm:gap-y-2 lg:gap-4 md:gap-4 md:grid-cols-3">
						{categorias.map((categoria) => (
							<CardCategorias
								key={categoria.id}
								categoria={categoria}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarCategorias
