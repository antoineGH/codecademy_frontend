import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '../styles'

const images = {
	copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
	quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
}

export class CopyCat extends React.Component {
	render() {
		const { copying, name, toggleTape, input, handleChange } = this.props

		return (
			<div style={styles.divStyles}>
				<h1 style={{ marginBottom: 80 }}>Copy Cat {name ? name : 'Tom'}</h1>
				<input type='text' value={input} onChange={handleChange} />
				<img style={styles.imgStyles} alt='cat' src={copying ? images.copycat : images.quietcat} onClick={toggleTape} />
				<p>{copying && input}</p>
			</div>
		)
	}
}

CopyCat.propTypes = {
	copying: PropTypes.bool.isRequired,
	name: PropTypes.string,
	input: PropTypes.string.isRequired,
	toggleTape: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
}
