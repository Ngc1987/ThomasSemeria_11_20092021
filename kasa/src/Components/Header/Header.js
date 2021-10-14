import headerLogo from "../../Assets/headerLogo.svg"
import "./Header.scss"
import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom"

// console.log(window.screen.width)

export default class Header extends Component {

	render() {
		// Composant Header à afficher dasn toutes les pages
	  return (
		<header className="header">

			<Link to="/">
				<img className="header__logo" src={headerLogo} alt="Logo Kasa Lien vers la page d'accueil" />		
			</Link>

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