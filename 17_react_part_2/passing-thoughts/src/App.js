import './App.css'
import React, { useState } from 'react'
import { generateId, getNewExpirationTime } from './utils/utilities'
import Thought from './components/Thought'
import AddThoughtForm from './components/AddThoughtForm'

function App() {
	const [thoughts, setThoughts] = useState([
		{
			id: generateId(),
			text: 'First Idea!',
			expireAt: getNewExpirationTime(),
		},
		{
			id: generateId(),
			text: 'Second Idea!',
			expireAt: getNewExpirationTime(),
		},
	])

	const addTought = (thought) => {
		setThoughts((prev) => [thought, ...prev])
	}

	const removeThough = (thoughtIdToRemove) => {
		setThoughts((prev) => prev.filter((thought) => thought.id !== thoughtIdToRemove))
	}

	return (
		<div className='App'>
			<header>
				<h1>Passing Thoughts</h1>
			</header>
			<main>
				<AddThoughtForm addTought={addTought} />
				<ul>
					{thoughts.map((thought) => (
						<Thought key={thought.id} thought={thought} removeThough={removeThough} />
					))}
				</ul>
			</main>
		</div>
	)
}

export default App
