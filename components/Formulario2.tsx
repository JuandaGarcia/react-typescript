import useForm from 'hooks/useForm'

interface FormData {
	ciudad: string
	pais: string
}

const Formulario2 = () => {
	const { formulario, handleChange } = useForm<FormData>({
		ciudad: 'dd',
		pais: 'aa',
	})
	const { ciudad, pais } = formulario

	return (
		<form style={{ marginTop: '1rem' }}>
			<input type="text" value={ciudad} name="ciudad" onChange={handleChange} />
			<input type="text" value={pais} name="pais" onChange={handleChange} />
			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	)
}

export default Formulario2
