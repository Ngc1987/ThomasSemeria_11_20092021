import React, { Component } from 'react'
import "./HomeBanner.scss"
import homeBanner from './homeBanner.jpg'; // with import

export default class HomeBanner extends Component {
	// Composant affichant la bannière en haut de page dans le composant Home
	render() {
		return (
			<div className="header__pic">
				<div className="header__pic-overlay"></div>
				<img className="picAnim" src={homeBanner} alt="" />
				<p>Chez vous,</p>
				<p>partout et ailleurs</p>
			</div>
		)
	}
}


