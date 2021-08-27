import React from 'react'
import { CopyCat } from '../components/CopyCat'

export class CopyCatContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			copying: true,
			input: '',
		}

		this.toggleTape = this.toggleTape.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({ input: e.target.value })
	}

	toggleTape() {
		this.setState({ copying: !this.state.copying })
	}

	render() {
		return <CopyCat name='Antoine' copying={this.state.copying} toggleTape={this.toggleTape} input={this.state.input} handleChange={this.handleChange} />
	}
}
