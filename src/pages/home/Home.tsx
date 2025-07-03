import Carrossel from '../../components/carrossel/Carrossel'
import ListarProdutosHome from '../../components/produtos/listarprodutos/ListarProdutosHome'

function Home() {
	return (
		<>
			<div className='mt-22 md:mt-0'>
				<Carrossel />
			</div>
			<div className='mt-4'>
				<ListarProdutosHome />
			</div>
		</>
	)
}

export default Home