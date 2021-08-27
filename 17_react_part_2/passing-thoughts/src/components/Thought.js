import React, { useEffect } from 'react'

export default function Thought(props) {
	const { thought, removeThough } = props

	const handleRemoveClick = () => {
		removeThough(thought.id)
	}

	useEffect(() => {
		const timeRemaining = thought.expireAt - Date.now()

		const timeout = setTimeout(() => {
			removeThough(thought.id)
		}, timeRemaining)
		return () => {
			clearTimeout(timeout)
		}
	}, [thought, removeThough])

	return (
		<li>
			<button aria-label='Remove thought' className='remove-button' onClick={handleRemoveClick}>
				&times;
			</button>
			<div>{thought.text}</div>
		</li>
	)
}
