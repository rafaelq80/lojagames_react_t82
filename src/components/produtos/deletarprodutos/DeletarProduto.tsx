import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deletar, listar } from "../../../services/Service"
import Produto from "../../../models/Produto"
import { ClipLoader } from "react-spinners"


function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            alert('Produto não encontrado!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)

           alert('Produto apagado!')

        } catch (error) {
           alert('Erro ao apagar o produto')
           console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className='container w-full max-w-md mx-auto px-4 pt-20 md:pt-6'>
            <h1 className='text-3xl md:text-4xl text-center py-4'>Deletar Produto</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg'>
                Você tem certeza de que deseja apagar o produto a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-4 md:px-6 bg-slate-600 text-white font-bold text-lg md:text-2xl'>
                    Produto
                </header>
                <p className='p-4 md:p-8 text-xl md:text-3xl bg-white h-full'>{produto.nome}</p>
                <div className="flex flex-row">
                    <button
                        className='text-slate-100 bg-red-500 hover:bg-red-700 w-full py-2 text-base md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-teal-600 hover:bg-teal-800 flex items-center justify-center text-base md:text-lg'
                        onClick={deletarProduto}
                    >
                        {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size={24}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarProduto