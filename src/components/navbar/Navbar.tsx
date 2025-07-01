import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

	const navigate = useNavigate()

	const [nome, setNome] = useState<string>("")

	function handleBuscarProdutos(e: ChangeEvent<HTMLInputElement>){
		setNome(e.target.value)
	}

	function buscarProdutos(e: FormEvent<HTMLFormElement>){
		e.preventDefault()
		navigate(`/consultarnome/${nome}`)
		setNome('')
	}
	
	return (
		<>
			<div className="flex justify-center w-full py-4 text-white bg-slate-800">
				<div className="container flex items-center justify-between mx-4 text-lg">
					<Link to="/home">
						<img
							src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1705976699033"
							alt="Logo"
							className="w-60"
						/>
					</Link>

					<div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
							onSubmit={buscarProdutos}
						>
							<input
								className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Pesquisar produto pelo nome"
								id="nome"
								name="nome"
								required
								value={nome}
								onChange={(e: ChangeEvent<HTMLInputElement>) => handleBuscarProdutos(e)}
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700"
							>
								<MagnifyingGlassIcon
									size={14}
									weight="bold"
								/>
							</button>
						</form>
					</div>

					<div className="flex items-center gap-4 py-4">
						<Link
							to=""
							className="hover:underline"
						>
							Produtos
						</Link>
						<Link
							to="/categorias"
							className="hover:underline"
						>
							Categorias
						</Link>
						<Link
							to="/cadastrarcategoria"
							className="hover:underline"
						>
							Cadastrar Categoria
						</Link>
							<UserIcon
								size={32}
								weight="bold"
							/>

							<ShoppingCartIcon
								size={32}
								weight="bold"
							/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar