import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center text-white bg-slate-800">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">Loja de Games Generation | Copyright: {data}</p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-2">
                        <a href="" target="_blank">
                            <LinkedinLogo size={48} weight="bold" />
                        </a>
                        <a href="" target="_blank">
                            <InstagramLogo size={48} weight="bold" />
                        </a>
                        <a href="" target="_blank">
                            <FacebookLogo size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer