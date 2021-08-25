import React, { useState, useEffect } from 'react'

export default function EffectHook() {
	const [clickCount, setClickCount] = useState(0)

	useEffect(() => {
		document.addEventListener('keydown', increment)

		return () => {
			document.removeEventListener('keydown', increment)
		}
	})

	const increment = () => setClickCount((clickCount) => clickCount + 1)

	return (
		<div>
			<h1>Document Clicks: {clickCount}</h1>
		</div>
	)
}
