import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { atualizar, cadastrar, listar } from "../../../services/Service"

import Categoria from "../../../models/Categoria"
import Produto from "../../../models/Produto"
import { ClipLoader } from "react-spinners"

function FormProduto() {
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [categorias, setCategorias] = useState<Categoria[]>([])

	const [categoria, setCategoria] = useState<Categoria>({
		id: 0,
		tipo: "",
	})
	const [produto, setProduto] = useState<Produto>({} as Produto)

	const { id } = useParams<{ id: string }>()

	async function buscarProdutoPorId(id: string) {
		try {
			await listar(`/produtos/${id}`, setProduto)
		} catch (error: any) {
			alert("Erro ao Buscar Produto")
			console.error(error)
		}
	}

	async function buscarCategoriaPorId(id: string) {
		try {
			await listar(`/categorias/${id}`, setCategoria)
		} catch (error: any) {
			alert("Erro ao Buscar Categoria")
			console.error(error)
		}
	}

	async function buscarCategorias() {
		try {
			await listar(`/categorias`, setCategorias)
		} catch (error: any) {
			alert("Erro ao Buscar Categorias")
			console.error(error)
		}
	}

	useEffect(() => {
		buscarCategorias()

		if (id !== undefined) {
			buscarProdutoPorId(id)
		}
	}, [id])

	useEffect(() => {
		setProduto({
			...produto,
			categoria: categoria,
		})
	}, [categoria])

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		const { type, value, name } = e.target
		let valor: string | number = value

		if (["number", "range"].includes(type) || (!isNaN(Number(value)) && value !== "")) {
			// Remove zeros à esquerda mantendo pelo menos um dígito
			const valorSemZeros = value.replace(/^0+(?!$)/, "") || "0"
			valor = parseFloat(Number(valorSemZeros).toFixed(2))
		}

		setProduto({
			...produto,
			[name]: valor,
			categoria: categoria,
		})
	}

	function retornar() {
		navigate("/produtos")
	}

	async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsLoading(true)

		if (id !== undefined) {
			try {
				await atualizar(`/produtos`, produto, setProduto)

				alert("Produto atualizado com sucesso")
			} catch (error: any) {
				alert("Erro ao atualizar o Produto!")
				console.error(error)
			}
		} else {
			try {
				await cadastrar(`/produtos`, produto, setProduto)

				alert("Produto cadastrado com sucesso")
			} catch (error: any) {
				alert("Erro ao cadastrar o Produto!")
				console.error(error)
			}
		}

		setIsLoading(false)
		retornar()
	}

	return (
		<div className="container flex flex-col items-center justify-center mx-auto px-2 p-20 md:pt-4 md:pb-8">
			<h1 className="text-3xl md:text-4xl text-center my-8">
				{id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
			</h1>

			<form
				className="w-full max-w-md md:max-w-3/4 flex flex-col gap-4 px-2"
				onSubmit={gerarNovoProduto}
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="titulo">Nome do Produto</label>
					<input
						value={produto.nome}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						type="text"
						placeholder="Insira aqui o nome do Produto"
						name="nome"
						required
						className="border-2 border-slate-700 rounded p-2 bg-white text-base md:text-lg"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="titulo">Preço do Produto</label>

					<input
						value={
							produto.preco === 0 || produto.preco === undefined ? "" : produto.preco
						}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						type="number"
						step=".01"
						placeholder="Adicione aqui o preço do Produto"
						name="preco"
						required
						className="border-2 border-slate-700 rounded p-2 bg-white text-base md:text-lg"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="titulo">Foto do Produto</label>

					<input
						value={produto.foto}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						type="text"
						placeholder="Adicione aqui a foto do Produto"
						name="foto"
						required
						className="border-2 border-slate-700 rounded p-2 bg-white text-base md:text-lg"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<p>Categoria do Produto</p>
					<select
						name="categoria"
						id="categoria"
						className="p-2 bg-white border-2 rounded border-slate-700"
						value={categoria.id !== 0 ? categoria.id : ""}
						onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
					>
						<option value="" disabled>
							Selecione uma Categoria
						</option>
						{categorias.map((categoria) => (
							<option key={categoria.id} value={categoria.id}>
								{categoria.tipo}
							</option>
						))}
					</select>
				</div>
				<button
					className="rounded text-slate-100 bg-slate-400 hover:bg-slate-800 
								w-full md:w-1/2 py-2 mx-auto flex justify-center text-base md:text-lg"
					type="submit"
				>
					{isLoading ? (
						<ClipLoader color="#ffffff" size={24} />
					) : (
						<span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
					)}
				</button>
			</form>
		</div>
	)
}

export default FormProduto
