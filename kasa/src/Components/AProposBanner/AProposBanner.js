import "./AProposBanner.scss"
import mountains from "../../Assets/mountains.jpg"
import React, { Component } from 'react'

export default class AProposBanner extends Component {
	// Composant affichant la bannière en haut de page dans le composant Apropos
	render() {
		return (
			<div className="picDiv">
				<img tabIndex="0" className="picAnim" src={mountains} alt="Montagnes" />
			</div>
		)
	}
}
