import "./SampleLoc.scss"

import React, { Component } from 'react'

export default class SampleLoc extends Component {
	// Composant affichant une vignette avec photo et titre pour chaque logement, à afficher dans le composant Home
	render(props) {
		// console.log(this.props)
		return (
			<div className="sampleLoc">
				<p>{this.props.appartInfos.title}</p>
				<img src={this.props.appartInfos.cover} alt="Aperçu de l'appartement" />
			</div>
		)
	}
}
