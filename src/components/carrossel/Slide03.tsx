function Slide03() {
	return (
		<div className="bg-yellow-400 flex justify-center h-[50vh] md:h-[70vh]">
			<div className="container grid grid-cols-1 md:grid-cols-2 text-slate-900">
				<div className="flex flex-col gap-2 md:gap-4 items-center justify-center py-2 md:py-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center">
						Promoção de Periféricos!
					</h2>
					<p className="text-lg md:text-3xl text-center">
						Descontos de até 50%
					</p>
				</div>

				<div className="flex justify-center items-center w-full">
					<img
						src="https://ik.imagekit.io/vzr6ryejm/games/perifericos.png?updatedAt=1714810226671"
						alt="Imagem Página Home"
						className="w-2/3 md:w-2/3 mx-auto h-52 md:h-80 lg:h-96 object-contain"
					/>
				</div>
			</div>
		</div>
	)
}

export default Slide03