import React, { Component } from 'react'
import "./ToggleDiv.scss"
import arrowDown from "../../Assets/arrowDown.svg"

export default class ToggleDiv extends Component {
	render(props) {
		return (
			<div className="toggleDiv">
				<div className="toggleDiv__title">
					<p>{this.props.title}</p>
					<img className="toggleDiv__arrow openArrow" src={arrowDown} alt="" />
				</div>
				<div className="toggleDiv__content open">
					<p>Climatisation</p>
					<p>Wi-Fi</p>
					<p>Cuisine</p>
					<p>Espace de travail</p>
					<p>Fer à repasser</p>
					<p>Sèche-cheveux</p>
					<p>Cintres</p>
				</div>
			</div>
		)
	}
}
