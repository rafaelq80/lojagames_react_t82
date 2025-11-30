import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import Produto from "../../../models/Produto"
import { listar } from "../../../services/Service"
import CardProdutos from "../cardprodutos/CardProdutos"

function ListarProdutosPorNome() {
	const [produtos, setProdutos] = useState<Produto[]>([]) // Todos os Produtos
	const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]) // Produtos Filtrados
	const [filtroPreco, setFiltroPreco] = useState<string>("")
	const [isLoading, setIsLoading] = useState(false)

	const { nome } = useParams<{ nome: string }>()

	async function buscarTodosProdutos() {
		try {
			setIsLoading(true)
			await listar("/produtos", setProdutos)
		} catch (error) {
			alert("Erro ao carregar produtos!")
		} finally {
			setIsLoading(false)
		}
	}

	function filtrarProdutos() {
		let produtosFiltrados = produtos

		if (produtosFiltrados && nome) {
			produtosFiltrados = produtosFiltrados.filter((produto) =>
				produto.nome.toUpperCase().includes(nome.toUpperCase())
			)
		}

		if (filtroPreco) {
			produtosFiltrados = produtosFiltrados.filter((produto) => {
				const preco = produto.preco
				if (filtroPreco === "200") return preco <= 200
				if (filtroPreco === "500") return preco > 200 && preco <= 500
				if (filtroPreco === "m500") return preco > 500
				return true
			})
		}

		setProdutosFiltrados(produtosFiltrados)
	}

	function limparFiltroPreco() {
		setFiltroPreco("")
		const radioButtons = document.getElementsByName("preco")
		radioButtons.forEach((radio) => {
			;(radio as HTMLInputElement).checked = false
		})
	}

	// Carrega todos os produtos na primeira vez
	useEffect(() => {
		buscarTodosProdutos()
	}, [])

	// Filtra os produtos de acordo com o termo da busca
	useEffect(() => {
		filtrarProdutos()
	}, [nome, produtos, filtroPreco])

	return (
		<>
			<div className="bg-gray-200 flex flex-col justify-center container">
				<div className="flex flex-col mx-4">
					<h1 className="text-4xl text-center my-4">
						Resultados da busca por <span className="italic text-teal-800">{nome}</span>
					</h1>

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

					{!isLoading && produtosFiltrados.length === 0 && (
						<div className="text-center my-4">
							<h2 className="text-2xl text-gray-600">Nenhum produto encontrado para "{nome}"</h2>
						</div>
					)}

					<div className="flex gap-4">
						<div className="flex flex-col w-1/5 ml-4 my-15 p-4 border rounded-lg border-slate-400">
							<h3 className="text-base font-bold py-2">Preço:</h3>
							<div className="flex gap-2">
								<input
									type="radio"
									name="preco"
									value="200"
									onChange={(e) => setFiltroPreco(e.target.value)}
								/>
								<label htmlFor="200"> Até R$ 200,00</label>
							</div>
							<div className="flex gap-2">
								<input
									type="radio"
									name="preco"
									value="500"
									onChange={(e) => setFiltroPreco(e.target.value)}
								/>
								<label htmlFor="500"> R$ 200,00 - R$500,00</label>
							</div>
							<div className="flex gap-2">
								<input
									type="radio"
									name="preco"
									value="m500"
									onChange={(e) => setFiltroPreco(e.target.value)}
								/>
								<label htmlFor="m500">Acima de R$ 500,00</label>
							</div>
							<div className="mt-8">
								<button
									className="flex justify-center w-1/2 py-2 mx-auto font-bold text-white rounded bg-teal-500 hover:bg-teal-700"
									onClick={limparFiltroPreco}>
									Limpar
								</button>
							</div>
						</div>

						{!isLoading && produtosFiltrados.length > 0 && (
							<div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
								{produtosFiltrados.map((produto) => (
									<CardProdutos key={produto.id} produto={produto} />
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarProdutosPorNome