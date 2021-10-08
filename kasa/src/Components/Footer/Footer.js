import React, { Component } from 'react'
import "./Footer.scss"
import footerLogo from "../../Assets/footerLogo.svg"

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<img src={footerLogo} alt="" />
				<p>© 2020 Kasa. All rights reserved</p>
			</footer>
		)
	}
}
