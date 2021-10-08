import React, { Component } from 'react'
import "./Error404.scss"

export default class Error404 extends Component {
	render() {
		return (
			<section className="error404">
				<p className="error404__number">404</p>
				<div className="error404__phrase">
					<p>Oups ! La page que </p>
					<p>vous demandez n'existe pas</p>
				</div>

				<p  className="error404__homeLink">Retourner sur la page d'accueil</p>

			</section>
		)
	}
}
