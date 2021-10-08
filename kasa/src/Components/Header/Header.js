import headerLogo from "../../Assets/headerLogo.svg"
import "./Header.scss"
import React, { Component } from 'react'

// console.log(window.screen.width)

export default class Header extends Component {

	

	render() {
	  return (
		<header className="header">
			<img className="header__logo" src={headerLogo} alt="" />
			<div className="header__buttons">

			
				<span>Accueil</span>
				<span>A propos</span>
			</div>
		</header>
	  ) 
	}
}