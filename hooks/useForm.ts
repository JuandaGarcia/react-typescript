import React, { ChangeEvent, useState } from 'react'

//Funtion
//function useForm<T>(initialState: T){}

const useForm = <T>(initialState: T) => {
	const [formulario, setFormulario] = useState(initialState)

	type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

	const handleChange = ({ target }: InputChange) => {
		const { name, value } = target
		setFormulario({ ...formulario, [name]: value })
	}
	return { formulario, handleChange, ...formulario }
}

export default useForm
