import React, { Component } from 'react'
import "./ToggleDiv.scss"
import arrowDown from "../../Assets/arrowDown.svg"


// const divTitle = document.querySelector(".toggleDiv__title")
// const divContent = document.querySelector(".toggleDiv__content")

// divTitle.addEventListener("click", openOrClosed)

// let isOpened = false
// function openOrClosed() {
// 	console.log(isOpened)
// 	isOpened = !isOpened
// }

// openOrClosed()

export default class ToggleDiv extends Component {

	
	constructor(props) {
		super(props);
		// this.isOpened = false

    	this.state = {
			isOpened: false
		};

		this.openOrClosed = this.openOrClosed.bind(this);
	}

	openOrClosed() {
		console.log(this.state.isOpened)

		if(this.state.isOpened) {
			this.setState({
				isOpened: false
			})
		}
		if(this.state.isOpened === false) {
			this.setState({
				isOpened: true
			})
		}
		// this.state.isOpened = !this.state.isOpened
	}

	render(props) {

		


		return (

			
			<div className={`toggleDiv ${this.props.className}`}>
				<div className="toggleDiv__title"
					onClick={() => this.openOrClosed()}
					>
					<p>{this.props.title}</p>
					<img className="toggleDiv__arrow openArrow" src={arrowDown} alt="" />
				</div>
				<div className={this.state.isOpened ? "toggleDiv__content open" : "toggleDiv__content closed"}>
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
