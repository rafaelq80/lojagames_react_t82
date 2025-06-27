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
					className="mx-auto my-16"
				/>
			)}
			<div className="flex justify-center bg-slate-100 pt-4">
				<div className="px-4 my-4 container flex flex-col">
					{(!isLoading && categorias.length === 0) && (
						<div className="text-3xl text-center my-8">
							Nenhum produto foi encontrado
						</div>
					)}

					<div className="container my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-4 md:pb-8">
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
