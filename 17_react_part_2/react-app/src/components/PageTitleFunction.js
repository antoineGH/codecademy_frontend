import React, { useState, useEffect } from 'react'

export default function PageTitleFunction() {
	const [name, setName] = useState('')

	useEffect(() => {
		if (name) {
			document.title = `Hi, ${name}`
		}
	}, [name])

	return (
		<div>
			<p>use {name} input field to rename this page!</p>
			<input onChange={({ target }) => setName(target.value)} value={name} type='text' />
		</div>
	)
}
