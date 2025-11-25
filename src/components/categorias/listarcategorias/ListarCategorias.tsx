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
				<div className="flex justify-center items-center min-h-[calc(100vh-8rem)] w-full overflow-x-hidden">
					<PacmanLoader
						color="#0D9488"
						margin={0}
						size={80}
						speedMultiplier={2}
						aria-label="Pacman-loading"
					/>
				</div>
			)}
			
			{!isLoading && (
				<div className="flex justify-center bg-slate-100 w-full min-h-[calc(100vh-8rem)] overflow-x-hidden">
					<div className="w-full max-w-8xl mt-8 px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 box-border">
						
						{categorias.length === 0 && (
							<div className="text-2xl md:text-3xl text-center text-slate-700 my-8 md:my-16">
								Nenhuma categoria foi encontrada
							</div>
						)}

						{categorias.length > 0 && (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
								{categorias.map((categoria) => (
									<CardCategorias
										key={categoria.id}
										categoria={categoria}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default ListarCategorias