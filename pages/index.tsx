import ContadorRed from 'components/ContadorRed'
import Counter from 'components/Counter'
import Formulario from 'components/Formulario'
import Formulario2 from 'components/Formulario2'
import TimerPadre from 'components/TimerPadre'
import Usuario from 'components/Usuario'

const index = () => {
	return (
		<>
			<Counter />
			<Usuario />
			<TimerPadre />
			<ContadorRed />
			<Formulario />
			<Formulario2 />
		</>
	)
}

export default index
