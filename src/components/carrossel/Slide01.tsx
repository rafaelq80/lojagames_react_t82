import ModalProduto from '../produtos/modalprodutos/ModalProduto'

function Slide01() {
    return (
        <div className="bg-slate-800 flex justify-center h-[50vh] md:h-[70vh]">
            <div className="container grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="flex flex-col gap-0 md:gap-1 items-center justify-center py-0 md:py-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-center">
                        Seja bem vinde!
                    </h2>
                    <p className="text-lg md:text-xl text-center">
                        Aqui você encontra os melhores Games!
                    </p>

                    <div className="flex justify-around gap-4 w-full">
                        <div className="hidden w-full md:flex md:justify-center md:items-center md:py-8">
                            <ModalProduto />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full">
                    <img
                        src="https://ik.imagekit.io/vzr6ryejm/games/home.png?updatedAt=1705970755605"
                        alt="Imagem Página Home"
                        className="w-2/3 md:w-2/3 mx-auto h-52 md:h-80 lg:h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default Slide01