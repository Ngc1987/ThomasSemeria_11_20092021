import headerLogo from "../../Assets/headerLogo.svg"
import "./Header.scss"
import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

// console.log(window.screen.width)

export default class Header extends Component {

	

	render() {
	  return (
		<header className="header">
			<img className="header__logo" src={headerLogo} alt="" />
			<div className="header__buttons">

			<NavLink exact activeClassName="underlined" to="/">
				<span>Accueil</span>
			</NavLink>
			<NavLink exact activeClassName="underlined" to="/apropos">
				<span>A propos</span>
			</NavLink>
				
			</div>
		</header>
	  ) 
	}
}