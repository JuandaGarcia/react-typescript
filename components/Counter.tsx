import { useState } from 'react'

const Counter = () => {
	const [counter, setCounter] = useState(0)

	const increment = (number: number = 1) => setCounter(counter + number)

	return (
		<>
			<h1>Counter: {counter}</h1>
			<button onClick={() => increment()}>+1</button>
			<button onClick={() => increment(2)}>+2</button>
			<button onClick={() => setCounter(0)}>Reset</button>
		</>
	)
}

export default Counter
