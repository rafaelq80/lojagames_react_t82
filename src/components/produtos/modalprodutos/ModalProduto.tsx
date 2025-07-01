import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './ModalProduto.css'
import FormProduto from '../formproduto/FormProduto'

function ModalProduto() {
	return (
		<Popup
			trigger={
				<button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-slate-800">
					Novo Produto
				</button>
			}
			modal
		>
			<FormProduto />
		</Popup>
	)
}

export default ModalProduto
