import React, { Component } from 'react'
import "./Footer.scss"
import footerLogo from "./footerLogo.svg"

export default class Footer extends Component {
	// Composant Footer à afficher dasn toutes les pages
	render() {
		return (
			<footer>
				<img src={footerLogo} alt="Logo Kasa" tabIndex="0" />
				<p tabIndex="0" >© 2020 Kasa. All rights reserved</p>
			</footer>
		)
	}
}
