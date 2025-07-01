import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import Categoria from '../../../models/Categoria'
import { deletar, listar } from '../../../services/Service'

function DeletarCategoria() {
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

	const { id } = useParams<{ id: string }>()

	async function buscarPorId(id: string) {
		try {
			await listar(`/categorias/${id}`, setCategoria)
		} catch (error: any) {
			alert('Tema não encontrado!')
		}
	}

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id)
		}
	}, [id])

	async function deletarCategoria() {
		setIsLoading(true)

		try {
			await deletar(`/categorias/${id}`)

			alert('Categoria apagada com sucesso')
		} catch (error) {
			alert('Erro ao apagar a categoria')
		}

		setIsLoading(false)
		retornar()
	}

	function retornar() {
		navigate('/categorias')
	}

	return (
		<div className="container w-1/3 mx-auto">
			<h1 className="py-4 text-4xl text-center">
				Deletar Categoria
			</h1>
			<p className="mb-4 font-semibold text-center">
				Você tem certeza de que deseja apagar a categoria a
				seguir?
			</p>
			<div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
				<header className="px-6 py-2 text-2xl font-bold text-white bg-slate-600">
					Categoria
				</header>
				<p className="h-full p-8 text-3xl bg-white">
					{categoria.tipo}
				</p>
				<div className="flex">
					<button
						className="w-full py-2 bg-red-500 text-slate-50 hover:bg-red-600"
						onClick={retornar}
					>
						Não
					</button>
					<button
						className="flex items-center justify-center w-full bg-teal-600 text-slate-50 hover:bg-teal-800"
						onClick={deletarCategoria}
					>
						{isLoading ? (
							<ClipLoader
								color="#ffffff"
								size={24}
							/>
						) : (
							<span>Sim</span>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
export default DeletarCategoria
