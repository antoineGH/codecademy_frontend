import React, { useState } from 'react'
import { generateId, getNewExpirationTime } from '../utils/utilities'

export default function AddThoughtForm(props) {
	const { addTought } = props
	const [text, setText] = useState('')

	const handleTextChange = (event) => {
		setText(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (text.length === 0) {
			return
		}
		const thought = {
			id: generateId(),
			text: text,
			expireAt: getNewExpirationTime(),
		}
		addTought(thought)
		setText('')
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type='text' aria-label="What's on your mind?" placeholder="What's on your mind?" value={text} onChange={handleTextChange}></input>
				<input type='submit' value='Add' />
			</form>
		</>
	)
}
