import React, { Component } from 'react'
import "./AProposBanner.scss"

export default class AProposBanner extends Component {
	// Composant affichant la bannière en haut de page dans le composant Apropos
	render() {
		return (
			<div className="picDiv">
				<img tabIndex="0" className="picAnim" src={process.env.PUBLIC_URL + "/Assets/mountains.jpg"} alt="Montagnes" />
			</div>
		)
	}
}
