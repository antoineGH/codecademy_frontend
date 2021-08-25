import React, { useState, useEffect } from 'react'
import './EffectHook.css'

export default function EffectHook() {
	const [clickCount, setClickCount] = useState(0)
	const [keyCount, setKeyCount] = useState(0)

	useEffect(() => {
		document.getElementById('divClick').addEventListener('mousedown', increment)
		return () => document.getElementById('divClick').removeEventListener('mousedown', increment)
	})

	useEffect(() => {
		document.addEventListener('keydown', incrementKey)
		return () => document.removeEventListener('keydown', incrementKey)
	})

	const increment = () => {
		setClickCount((clickCount) => clickCount + 1)
	}

	const incrementKey = () => {
		setKeyCount((keyCount) => keyCount + 1)
	}

	return (
		<>
			<div id='divClick'>
				<h1>Pink Div Clicks: {clickCount}</h1>
				<button onClick={() => setClickCount(0)}>Reset</button>
			</div>
			<div id='divKeyDown'>
				<h1>Document KeyDowns: {keyCount}</h1>
				<button onClick={() => setKeyCount(0)}>Reset</button>
			</div>
		</>
	)
}
