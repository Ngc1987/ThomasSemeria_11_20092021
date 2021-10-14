import React, { Component } from 'react'
import "./HomeBanner.scss"
import homeBanner from './homeBanner.jpg'; // with import

export default class HomeBanner extends Component {
	// Composant affichant la bannière en haut de page dans le composant Home
	render() {
		return (
			<div tabIndex="0"  className="header__pic">
				<div className="header__pic-overlay"></div>
				<img tabIndex="0" className="picAnim" src={homeBanner} alt="Paysage côtier" />
				
				<p tabIndex="0">Chez vous,</p>
				<p tabIndex="0">partout et ailleurs</p>
			</div>
		)
	}
}


