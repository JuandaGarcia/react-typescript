import { useEffect, useRef, useState } from 'react'

type TimerProps = {
	milisegundos: number
}

const Timer = ({ milisegundos }: TimerProps) => {
	const [segundos, setSegundos] = useState(0)
	const ref = useRef<NodeJS.Timeout>()

	useEffect(() => {
		ref.current && clearInterval(ref.current)
		ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos)
		return () => ref.current && clearInterval(ref.current)
	}, [milisegundos])

	return (
		<>
			<h4>
				Time: <small>{segundos}</small>
			</h4>
		</>
	)
}

export default Timer
