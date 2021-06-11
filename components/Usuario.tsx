import { useState } from 'react'

interface User {
	uid: string
	name: string
}

const Usuario = () => {
	const [user, setUser] = useState<User>()

	const login = () => setUser({ uid: 'asd', name: 'Juan' })

	return (
		<>
			<h1>Usuario</h1>
			<button onClick={login}>Login</button>
			{user ? <pre>{JSON.stringify(user)}</pre> : <pre>No hay usuario</pre>}
		</>
	)
}

export default Usuario
