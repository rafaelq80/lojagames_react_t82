import ListarProdutosHome from '../../components/produtos/listarprodutos/ListarProdutosHome'
import ModalProduto from '../../components/produtos/modalprodutos/ModalProduto'

function Home() {
	return (
		<>
			<div className="flex justify-center items-center w-full min-h-[calc(100vh-9rem)] md:h-[calc(100vh-9rem)] bg-slate-800">
				<div className="container grid grid-cols-1 gap-8 px-4 text-white md:grid-cols-2 md:gap-0">
					<div className="flex flex-col items-center justify-center gap-4 py-4 text-center">
						<h2 className="text-3xl font-bold md:text-5xl">
							Seja bem vinde!
						</h2>
						<p className="text-base md:text-xl">
							Aqui você encontra os melhores
							Games!
						</p>

						<div className="hidden md:flex justify-around gap-4">
							<ModalProduto />
						</div>
					</div>

					<div className="flex items-center justify-center">
						<img
							src="https://ik.imagekit.io/vzr6ryejm/games/home.png?updatedAt=1705970755605"
							alt="Imagem Página Home"
							className="w-2/3 max-w-xs md:max-w-md lg:max-w-lg"
						/>
					</div>
				</div>
			</div>

			<div className="py-2 md:py-0">
				<ListarProdutosHome />
			</div>
		</>
	)
}

export default Home
