import ListarProdutosHome from "../../components/produtos/listarprodutos/ListarProdutosHome"
import ModalProduto from "../../components/produtos/modalprodutos/ModalProduto"

function Home() {
    return (
        <>
            <div className="
                bg-slate-800 
                flex 
                justify-center
                py-8 md:py-16
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-1 md:grid-cols-2 
                    text-white
                    gap-8 md:gap-0
                    px-4
                    py-20 md:py-0
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        text-center
                        ">
                        <h2 className='
                            text-3xl md:text-5xl 
                            font-bold
                            '>
                            Seja bem vinde!
                        </h2>
                        <p className='text-base md:text-xl'>Aqui você encontra os melhores Games!</p>

                        <div className="flex justify-around gap-4">
                            <div className="hidden md:flex justify-around gap-4">
								<ModalProduto />
							</div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/vzr6ryejm/games/home.png?updatedAt=1705970755605"
                            alt="Imagem Página Home"
                            className='w-2/3 max-w-xs md:max-w-md lg:max-w-lg'
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