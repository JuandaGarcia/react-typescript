import useForm from 'hooks/useForm'

const Formulario = () => {
	const { formulario, handleChange, nombre, email } = useForm({
		email: '',
		nombre: '',
	})

	return (
		<form style={{ marginTop: '1rem' }}>
			<input type="email" value={email} name="email" onChange={handleChange} />
			<input type="text" value={nombre} name="nombre" onChange={handleChange} />
			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	)
}

export default Formulario
