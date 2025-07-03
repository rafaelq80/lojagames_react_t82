function Slide02() {
	return (
		<div
			className="
                flex 
                justify-center
                bg-[url('https://ik.imagekit.io/vzr6ryejm/games/bg_slide_02.png?updatedAt=1714810179695')]
                bg-repeat
                h-[50vh] md:h-[70vh]
                "
		>
			<div
				className="
                    container 
                    grid 
                    grid-cols-1 md:grid-cols-2
                    text-white
                    "
			>
				<div
					className="
                        flex 
                        flex-col 
                        gap-2 md:gap-4
                        items-center 
                        justify-center 
                        py-2 md:py-4
                        "
				>
					<h2
						className="
                            text-3xl md:text-5xl 
                            font-bold
                            text-center
                            "
					>
						Promoções Imperdíveis!
					</h2>
					<p className="text-lg md:text-3xl text-center">
						É na Madrugada dos Games!
					</p>
				</div>

				<div className="flex justify-center items-center w-full">
					<img
						src="https://ik.imagekit.io/vzr6ryejm/games/logo_promocao.png?updatedAt=1714810126717"
						alt="Imagem Página Home"
						className="w-2/3 md:w-3/4 mx-auto h-64 md:h-96 lg:h-[28rem] object-contain"
					/>
				</div>
			</div>
		</div>
	)
}

export default Slide02